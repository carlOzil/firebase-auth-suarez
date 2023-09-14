const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const fireIndex = (req, res) => {
    res.render('fireForm.ejs');
};

const fireRegistro = (req, res) => {
    
    const {email, password} = req.body;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

module.exports = {
    fireIndex,
    fireRegistro
}