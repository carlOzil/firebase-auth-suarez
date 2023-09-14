const express = require('express');
const cors = require('cors');
const firebase = require('firebase/app');

require('dotenv').config();

const app = express();

const port = 2000;

app.use(cors());
const firebaseConfig = {
    apiKey: "AIzaSyA4L1FTzhGfsdfiJuqkD4zIKMQAGAFfx5g",
    authDomain: "prueba-auth-firebase-95f65.firebaseapp.com",
    projectId: "prueba-auth-firebase-95f65",
    storageBucket: "prueba-auth-firebase-95f65.appspot.com",
    messagingSenderId: "130328097675",
    appId: "1:130328097675:web:c3d9b4638b93e494c8b58e"
};

firebase.initializeApp(firebaseConfig);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/',require('./routes/fireFormRoute'));

app.listen(port, () => {
    console.log('server FIREBASE listening in port 2000')
})