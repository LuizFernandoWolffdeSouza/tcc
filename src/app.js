import express from "express";
import dotenv from "dotenv";
import conexao from "./config/db.js";
import planorouter from "./routers/planorouter.js"
import usuariorouter from "./routers/usuariorouter.js"

const app = express()
app.use(express.json())

const porta = 4000
dotenv.config()
app.use('/', planorouter);
app.use('/api/plans', usuariorouter);

conexao()

app.listen( porta, () => console.log("Servidor rodando aqui", porta))