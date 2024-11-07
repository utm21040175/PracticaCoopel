import { modeloProductos } from "../models/productos.model.js";

modeloProductos.create({
    Name : "Computadora",
    Precio : 299999,
    Categoria : "Electronicos"
});

export const testProductos = ()=>{
    console.log("Funciona productos")
}