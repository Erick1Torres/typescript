export interface RespuestaApi<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
}

//Con esta clase simulare al cliente de bases de datos
export class ApiCliente {
    obtenerRescuros<T>(endpoint: string): Promise<RespuestaApi<T>> {
        console.log(`[red] conectando con ${endpoint}....`);
            return new Promise((resolve) =>{
                setTimeout(() =>{
                    const respuestraExitosa: RespuestaApi<T> ={
                        codigoEstado: 200,
                        exito: true,
                        datos: {} as T
                    };
                    resolve(respuestraExitosa);
                }, 1500);
            });
    }
}