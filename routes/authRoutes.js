const express = require("express");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/userRepository");

const authRoutes = express.Router();

const userRepository = new UserRepository();

authRoutes.post("/login", (req, res) => {
    const usuario = req.body;

    console.log(userRepository.usuarios);

    if(!usuario.email || !usuario.senha) {
        return (
            res.sendStatus(400)
        );
    };

    if(
        usuario.email == userRepository.usuarios.email
        &&
        usuario.senha == userRepository.usuarios.senha
    ){
        const payload = {email: userRepository.usuarios.email, exp: 5000};
        const chaveSecreta = "macacobanana";

        const token = jwt.sign(payload, chaveSecreta);

        return res.send({
            user: payload,
            auth: token
        });
    }

    res.status(401).json({
        error: "email/senha incorretos"
    });
});

module.exports = authRoutes;