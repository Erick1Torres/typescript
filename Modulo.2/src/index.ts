import { EstadoMatricula, Estudiante, generarReportes } from './domain/types/universidad';
import { ApiCliente } from './services/api-cliente';

console.log("...Iniciando Sistema Universitario (Modulo.2)...");


//Esto seria el dominio y la union discriminada
console.log("1. Probando la union discriminada:");

const miMatricula: EstadoMatricula = {
    tipo: "Activa",
    asignaturas: [
        {id: 101, nombre: "sistemas operativos", creditos: 7},
        {id: 102, nombre: "bases de datos", creditos: 6}
    ]
};

const reporte = generarReportes(miMatricula);
console.log(reporte);

//Aqui seria el servicio generico de datos

console.log("2.Probando el ApiCliente con genericos (<T>):");

async function probarBasesDeDatos() {
    const cliente = new ApiCliente();

    const respuesta = await cliente.obtenerRescuros<Estudiante>('/api/estudiante/ASIR-2026');
    if (respuesta.exito) {
        console.log(`La Conexión es exitosa, codigo de estado: ${respuesta.codigoEstado}`);

        respuesta.datos = {
            id: "ASIR-2026",
            nombre: "Ana Torres",
            email: "ana.torres118@uni.edu"
        };
        console.log("Datos recibidos del servidor:");
        console.log(`- Nombre: ${respuesta.datos.nombre}`);
        console.log(`- Email: ${respuesta.datos.email}`);
    }
}

probarBasesDeDatos();