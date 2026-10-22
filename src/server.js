import { veiculosRouter } from "./routes/veiculos.routes.js";
import express from "express";

const port = 3000
const app = express();

app.use(express.json())
app.use("/veiculos", veiculosRouter)