import { modeloCliente } from "../models/clientes.model.js";

modeloCliente.create({
    Name : "Lalo",
    Apepat : "Lara",
    Edad : 21,
    Correo : "utm21040175@gmail.com"
})

export const testCliente = ()=>{
    console.log("Funciona el controlador")
}