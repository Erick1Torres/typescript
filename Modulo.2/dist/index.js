"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creamos un objeto que siga esa interfaz
const nuevoUsuario = {
    id: 1,
    nombre: "Erick",
    fechaRegistro: new Date()
};
// Un saludo con tipado en los parámetros
function saludar(persona) {
    return `¡Hola, ${persona.nombre}! Tu ID de acceso es ${persona.id}.`;
}
console.log(saludar(nuevoUsuario));
console.log("TypeScript está configurado y funcionando perfectamente. 🚀");
