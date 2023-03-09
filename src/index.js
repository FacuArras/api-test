"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3002;
app.get("/users", function (req, res) {
    res.json({
        users: [],
        message: "Ususarios obtenidos correctamente."
    });
});
app.post("/users", function (req, res) {
    res.status(201).json({
        id: 2546,
        message: "Usuario creado correctamente"
    });
});
app.get("/users/:userId/products", function (req, res) {
    res.status(204).json({
        products: [],
        message: "Productos obtenidos correctamente."
    });
});
app.listen(port, function () {
    console.log("Aplicaci\u00F3n incializada y escuchando en el puerto ".concat(port));
});
