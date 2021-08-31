const db = require("./initConnection").default;
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
	const existingUser = await db.collection("user").get(req.body.email);
	if (existingUser.empty) {
		const hashedPwd = bcrypt.hashSync(req.body.pwd, 10);
		const docRef = db.collection("user").doc(req.body.email);
		await docRef.set({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			admin: req.body.admin,
			structure: req.body.structure,
			pwd: hashedPwd,
		});

		res.status(201).json({
			message: "Utilisateur créé !",
		});
	} else {
		res.status(500).json({
			message: `Utilisateur déjà existant avec l'identifiant ${req.body.email}`,
		});
	}
};

exports.login = async (req, res, next) => {
	const existingUser = await db.collection("user").get(req.body.email);
	if (existingUser.empty) {
		res.status(401).json({
			message: `Utilisateur non trouvé avec l'identifiant ${req.body.email}`,
		});
	} else {
		bcrypt
			.compare(req.body.pwd, existingUser.docs[0].get("pwd"))
			.then((valid) => {
				if (!valid) {
					return res
						.status(401)
						.json({ error: "Authentification incorrect !" });
				}
				res.status(200).json(existingUser.docs[0].data());
			})
			.catch((error) => res.status(500).json({ error }));
	}
};
