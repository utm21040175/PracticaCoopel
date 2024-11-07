import mongoose, { mongo } from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {testCliente} from "./backend/controllers/clientes.controller.js"
import { testProductos } from "./backend/controllers/productos.controller.js";
import { testEmpleados } from "./backend/controllers/Empleados.controller.js";


dotenv.config();

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
}).catch((error)=>{
    console.log("No funciona la conexion a la base de datos", error)
})


const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correctamente el servidor local")
});


testCliente();
testProductos();
testEmpleados();