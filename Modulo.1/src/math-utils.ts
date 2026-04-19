export function calcularMedia(array: number[]): number | null {
    if (array.length === 0) {
        return null;
}
    const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / array.length;
}

export function calcularMediana(array: number[]): number | null {
    if (array.length === 0) {
        return null;
}

    const arrayOrdenado = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(arrayOrdenado.length / 2);

    if (arrayOrdenado.length % 2 !== 0) {
        return arrayOrdenado[mitad];
}

    const valor1 = arrayOrdenado[mitad - 1];
    const valor2 = arrayOrdenado[mitad];
        return (valor1 + valor2) / 2;
}

export function filtrarAtipicos(array: number[], limite: number): number[] {
    return array.filter((valor) => valor <= limite);
}