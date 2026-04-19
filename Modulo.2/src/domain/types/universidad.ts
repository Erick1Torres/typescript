export interface Estudiante {
    readonly id: string;
    nombre: string;
    email: string;
}

export interface Asignatura{
    readonly id: number;
    nombre: string;
    creditos: number;
}

export interface MatriculaAcriva {
    tipo: "Activa";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "Suspendida";
    motivo: string;

}

export interface MatriculaFinalizada {
    tipo: "Finalizado";
    notaMedia: number;
}

export type EstadoMatricula = MatriculaAcriva | MatriculaSuspendida | MatriculaFinalizada;

export function generarReportes(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "Activa":
            return `La matricula estab activa con ${estado.asignaturas.length} asignaturas inscritas.`;
        case "Suspendida":
            return `La matricula ha sido suspendida por el siguente motivo ${estado.motivo}`;
        case "Finalizado":
            return `El estudiante ha finalizado el curso de ASIR con una nota media de ${estado.notaMedia}`;
        default:
            const CheckExhaustivo: never = estado;
            return `Estado desconocido: ${CheckExhaustivo}`;
    }
}