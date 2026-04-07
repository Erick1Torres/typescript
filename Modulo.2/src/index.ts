// Definimos una interfaz para practicar tipos
interface Usuario {
    id: number;
    nombre: string;
    fechaRegistro: Date;
}

// Creamos un objeto que siga esa interfaz
const nuevoUsuario: Usuario = {
    id: 1,
    nombre: "Erick",
    fechaRegistro: new Date()
};

// Un saludo con tipado en los parámetros
function saludar(persona: Usuario): string {
    return `¡Hola, ${persona.nombre}! Tu ID de acceso es ${persona.id}.`;
}

console.log(saludar(nuevoUsuario));
console.log("TypeScript está configurado y funcionando perfectamente. 🚀");