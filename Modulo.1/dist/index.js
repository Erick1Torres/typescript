"use strict";
// modulo-1/src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
// Datos de prueba: Sistema de gestión universitario
const notasAlumnos = [8, 9, 5, 10, 4, 7];
const arrayVacio = [];
console.log("Media de las notas:", (0, math_utils_1.calcularMedia)(notasAlumnos));
console.log("Mediana de las notas:", (0, math_utils_1.calcularMediana)(notasAlumnos));
console.log("Notas atípicas (menores o iguales a 5):", (0, math_utils_1.filtrarAtipicos)(notasAlumnos, 5));
// Prueba del caso límite (array vacío)
console.log("Media sin alumnos matriculados:", (0, math_utils_1.calcularMedia)(arrayVacio));
