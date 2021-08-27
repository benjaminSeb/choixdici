
const admin = require('firebase-admin');
const serviceAccount = require('../choixdici-firestore.json');
const bcrypt = require('bcrypt');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

exports.createFirestore = async (req, res, next) => {
    const hashedPwd = bcrypt.hashSync(req.query.pwd, 10);
    const docRef = db.collection('users').doc('alovelace');
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
        pwd: hashedPwd
    });

    res.status(201).json({
        message: 'Objet créé dans Firestore !'
    });
}

exports.updateFirestore = async (req, res, next) => {
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
        first: 'Zbra',
        last: 'Sting',
        born: 2021
    });

    res.status(201).json({
        message: 'Objet MAJ dans Firestore !'
    });
}

exports.getFirestore = async (req, res, next) => {
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
    const datas = snapshot.docs.map((doc) => {
        rObj = {};
        rObj[doc.id] = doc.data();
        return rObj;
    })
    res.status(200).json(datas);
}

exports.deleteFirestore = async (req, res, next) => {
    const deleted = await db.collection('users').doc('alovelace').delete();

    res.status(200).json({
        message: 'Objet supprimé dans Firestore !'
    });
}