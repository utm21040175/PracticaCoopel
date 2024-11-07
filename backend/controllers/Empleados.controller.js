import { modeloEmpleado } from "../models/Empleados.model.js";

modeloEmpleado.create({
    Name : "Leslie", 
    Apepat : "Arjona", 
    Edad : 22,
    Correo : "leslie..1,@gmail.com"
})

export const testEmpleados = ()=>{
    console.log("Funciona el empleado")
}