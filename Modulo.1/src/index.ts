import { calcularMedia, calcularMediana, filtrarAntipicos } from "./math-utils";

//Defino el conjunto de datos para probar
const datosPrueba: number[] = [10, 15, 20, 12, 9, 8, 4, 500, 14];//coloco el 500 para la pueba ya que es un valor atipico
const limite = 100;

//Limpio los datos 
const datosLimpios = filtrarAntipicos(datosPrueba, limite);

//ejecuto los calculos 
const media = calcularMedia (datosLimpios);
const mediana = calcularMediana (datosLimpios);

//Muestro el resultado controlando el posible valor "null"
if (media !== null && mediana !== null ){
    console.log(`Media tras filtrar: ${media.toFixed(2)}`);
    console.log(`mediana tras filtrar: ${mediana}`);
}
else {
    console.log("Error: el conjunto de datos esta vacio.");
}