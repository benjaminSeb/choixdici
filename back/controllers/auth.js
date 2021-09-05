const db = require("./initConnection").default;
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.createUser = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const superUser = await db
			.collection("user")
			.where("email", "==", req.body.superuser)
			.get();
		if (superUser.empty || superUser.docs[0].get("admin") != true) {
			res.status(403).json({
				message: `Vous n'êtes pas autorisé à créer un nouvel utilisateur`,
			});
		} else {
			const existingUser = await db
				.collection("user")
				.where("email", "==", req.body.email)
				.limit(1)
				.get();
			if (existingUser.empty) {
				const hashedPwd = bcrypt.hashSync(req.body.pwd, 10);
				const docRef = db.collection("user");
				await docRef.add({
					email: req.body.email,
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
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.login = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const existingUser = await db
			.collection("user")
			.where("email", "==", req.body.email)
			.limit(1)
			.get();
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
					res
						.status(200)
						.json(
							Object.fromEntries(
								Object.entries(existingUser.docs[0].data()).filter(
									([key]) => key !== "pwd" && key !== "admin"
								)
							)
						);
				})
				.catch((error) => res.status(500).json({ error }));
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};
