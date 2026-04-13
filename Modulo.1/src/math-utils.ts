export function calcularMedia(array: number[]): number | null{
    
    //si no hay datos me devuelve null para evitar errores matematicos
    if (array.length === 0) return null;

    //.reduce me sirve para acumular todos los numeros del array para sumarlos
    const suma = array.reduce((acumulado, valorActual) => acumulado +valorActual, 0);
    return suma / array.length;
}

export function calcularMediana(array: number[]): number | null{
    if (array.length ===0) return null;

    //ordena el array de menor a mayor para que encuentre el centro
    const ordenados = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    //si la longitud es par promedia los dos valores centrales
    if (ordenados.length % 2 === 0){
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    // si es impar me devuelve el valor del centro
    return ordenados[mitad];
}

export function filtrarAntipicos(array : number[],limite : number) : number[]{
    //Con filter creo una nueva array solo para los elementos que cumplen las condiciones
    return array.filter(num => Math.abs(num) <= limite);
}
