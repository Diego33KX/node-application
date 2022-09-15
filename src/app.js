import express from 'express'
import cors from 'cors'

import { client, product } from "./components";

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {res.send('WELCOME TO THE HOME PAGE')})
app.use("/clientes", client)
app.use("/productos", product)