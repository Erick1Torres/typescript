import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';

const notasAlumnos = [8, 9, 5, 10, 4, 7];
const arrayVacio: number[] = [];

console.log("Media de las notas:", calcularMedia(notasAlumnos));
console.log("Mediana de las notas:", calcularMediana(notasAlumnos));
console.log("Notas atípicas (menores o iguales a 5):", filtrarAtipicos(notasAlumnos, 5));

// Prueba del caso límite (array vacío)
console.log("Media sin alumnos matriculados:", calcularMedia(arrayVacio));