import { EsquemaGeneral } from "./clientes.model.js";
import {model} from "mongoose";

export const modeloEmpleado = new model ("Tabla de empleados", EsquemaGeneral);

