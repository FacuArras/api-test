import * as express from "express";

const app = express();
const port = process.env.PORT || 3002;

app.get("/users", (req, res) => {
    res.json({
        users: [],
        message: "Ususarios obtenidos correctamente."
    });
});

app.post("/users", (req, res) => {
    res.status(201).json({
        id: 2546,
        message: "Usuario creado correctamente"
    });
});

app.get("/users/:userId/products", (req, res) => {
    res.status(204).json({
        products: [],
        message: "Productos obtenidos correctamente."
    });
});

app.listen(port, () => {
    console.log(`Aplicación incializada y escuchando en el puerto ${port}`)
});
