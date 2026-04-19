# Documentación del Módulo 1: Fundamentos y Configuración Estricta

## Introducción
En esta primera etapa del proyecto, mi objetivo fue sentar una base técnica sólida. No se trataba solo de escribir funciones matemáticas, sino de configurar un entorno que me obligara a programar de forma segura desde el principio. 

## La importancia de la Configuración Estricta
Al inicializar el proyecto, configuré el `tsconfig.json` con la opción `"strict": true`. Al principio parece un estorbo porque el compilador se vuelve muy exigente, pero pronto entendí su valor real. Al activar el paquete de reglas como `strictNullChecks`, TypeScript me forzó a manejar explícitamente los casos donde los datos podrían no existir.

Por ejemplo, al programar la función de `calcularMedia`, el sistema me obligó a prever qué pasaría si el array de notas llegara vacío. En JavaScript normal, esto devolvería `NaN` y podría romper la aplicación; aquí, el tipado `number | null` me obligó a gestionar ese escenario antes de que ocurriera.

## Transpilación y Limpieza de Código
Una de las cosas que más me llamó la atención fue ver el resultado en la carpeta `dist/`. Al ejecutar `npx tsc`, todo el rastro de TypeScript desaparece. Esto me demostró que el tipado estricto es como un "andamio" que usamos durante la construcción: nos protege mientras trabajamos, pero al final entregamos un JavaScript puro y ligero, sin sobrecarga para el navegador.

## Conclusión
Este módulo me sirvió para entender que TypeScript no es solo poner nombres a las variables, sino una herramienta de pensamiento lógico que te ayuda a prever errores de "ausencia de valor" mucho antes de que el código llegue a ejecución.