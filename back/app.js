const express = require('express');
// const admin = require('firebase-admin');
// const serviceAccount = require('./choixdici-firestore.json');
const firestoreRoutes = require('./routes/firestore');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// const db = admin.firestore();

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

// app.use('/create', async (req, res, next) => {
//     const docRef = db.collection('users').doc('alovelace');

//     await docRef.set({
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1815
//     });

//     res.status(201).json({
//         message: 'Objet créé dans Firestore !'
//     });
// });

// app.use('/update', async (req, res, next) => {
//     const docRef = db.collection('users').doc('alovelace');

//     await docRef.set({
//         first: 'Zbra',
//         last: 'Sting',
//         born: 2021
//     });

//     res.status(201).json({
//         message: 'Objet MAJ dans Firestore !'
//     });
// });

// app.use('/get', async (req, res, next) => {
//     const snapshot = await db.collection('users').get();
//     snapshot.forEach((doc) => {
//         console.log(doc.id, '=>', doc.data());
//     });
//     const datas = snapshot.docs.map((doc) => {
//         rObj = {};
//         rObj[doc.id] = doc.data();
//         return rObj;
//     })
//     res.status(200).json(datas);
// });

// app.use('/delete', async (req, res, next) => {
//     const deleted = await db.collection('users').doc('alovelace').delete();

//     res.status(200).json({
//         message: 'Objet supprimé dans Firestore !'
//     });
// })

app.use('/firestore', firestoreRoutes);

module.exports = app;