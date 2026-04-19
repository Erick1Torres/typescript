# Arquitectura final - Práctica 4: Ecosistemas Modernos y Tipado Estricto

## Introducción y Enfoque Arquitectónico
Durante el desarrollo de esta práctica, mi objetivo no ha sido únicamente cumplir con los requisitos funcionales, sino construir una base de código estructurada, predecible y escalable. Para lograrlo, he mantenido una separación estricta de responsabilidades dividiendo el proyecto en dos ecosistemas: un entorno de lógica pura (Módulos 1 y 2) y una capa de presentación interactiva con React (Módulo 3). 

A lo largo de ambos repositorios, he utilizado TypeScript no solo como un linter avanzado, sino como una herramienta de diseño arquitectónico. A continuación, detallo las decisiones técnicas clave y cómo me han ayudado a prevenir errores antes siquiera de ejecutar el código.

## 1. Abstracción y reutilización mediante Genéricos (`<T>`)
Considero que el uso de genéricos ha sido uno de los mayores aciertos de esta práctica para cumplir con el principio DRY (*Don't Repeat Yourself*). 

En la capa de simulación de acceso a datos, diseñé la interfaz `RespuestaAPI<T>` y el servicio genérico `obtenerRecurso<T>`. Esta decisión me permitió centralizar la lógica de las promesas y las respuestas HTTP en un solo lugar. Gracias al genérico, el sistema garantiza que, independientemente de si solicito un "Estudiante" o una "Asignatura", la propiedad `datos` siempre estará fuertemente tipada con el contrato correspondiente.

En el ecosistema de React, llevé este concepto a la interfaz de usuario construyendo el componente `<DataTable<T>>`. En lugar de programar una tabla rígida para cada entidad, ahora dispongo de un componente dinámico y universal. Al restringir las propiedades de las columnas con el tipo `(keyof T)[]`, he eliminado por completo la posibilidad de renderizar propiedades inexistentes en la vista, ya que el compilador rechaza cualquier intento de pasar una clave tipográfica incorrecta.

## 2. Eliminando estados imposibles: Uniones Discriminadas
A la hora de modelar las reglas de negocio de la universidad, me di cuenta de que utilizar estructuras de datos sueltas (como múltiples variables booleanas del tipo `isActiva`, `isSuspendida`) abría la puerta a estados imposibles y contradictorios. 

Para resolver esto de forma elegante, implementé la Unión Discriminada `EstadoMatricula`. Al definir una propiedad común literal (`tipo`) que actúa como nodo discriminante, TypeScript es capaz de "estrechar" (*narrowing*) el contexto automáticamente. Al programar la lógica del `switch`, el propio editor de código me impedía acceder al "motivo" de suspensión si la matrícula estaba activa. Esto demuestra cómo el tipado puede documentar y forzar las reglas de negocio de manera natural.

## 3. "Future-proofing" con el tipo `never` y Análisis Exhaustivo
Uno de los mayores retos en proyectos que escalan es recordar todas las dependencias lógicas cuando se añade una nueva característica. Para blindar la función `generarReportes`, apliqué el patrón de "Análisis exhaustivo".

Al capturar el flujo en el bloque `default` del `switch` y asignarlo a una variable de tipo `never`, he logrado que el compilador trabaje a mi favor. Si el día de mañana otro desarrollador (o yo mismo) decide añadir un estado nuevo a las matrículas (por ejemplo, "EN_ESPERA") y olvida actualizar la función de reportes, el código lanzará un error crítico en tiempo de compilación. Este patrón es fundamental para la mantenibilidad a largo plazo.

## 4. Gestión de estados inmutables con Tipos de Utilidad
En el desarrollo con React, gestionar formularios de edición siempre presenta un desafío de tipado: cuando un usuario edita una fila, el estado temporal no siempre cumple con el contrato completo del modelo original desde el primer segundo. 

En lugar de crear una interfaz duplicada con propiedades opcionales (lo que generaría inconsistencias de mantenimiento), decidí utilizar el transformador estándar `Partial<T>`. Esto me ha permitido definir el estado del hook (`useState`) como una versión relajada y temporal de mi entidad principal, manteniendo un único punto de verdad para la estructura de datos pero otorgando la flexibilidad necesaria para la interacción en la interfaz de usuario.

## 5. Controlando las fronteras del sistema con librerías externas
Para los cálculos complejos de tiempo, integré la librería de terceros `luxon`. Al trabajar con código externo en JavaScript puro, siempre existe el riesgo de perder el control sobre los tipos. 

Para mitigar este riesgo, instalé el paquete de definiciones de la comunidad (`@types/luxon`). Además, tomé la decisión de encapsular su uso dentro de una función utilitaria fuertemente tipada. Esta función actúa como un "adaptador": recibe cadenas ISO estrictas, confina la lógica de `luxon` en su interior, y expone únicamente un retorno numérico estricto. De esta forma, el resto del proyecto no se ve contaminado por dependencias no tipadas.

## Conclusión: La Experiencia de Desarrollo (DX)
Tras completar estos módulos, queda en evidencia la superioridad de TypeScript frente a JavaScript estándar para proyectos que aspiran a ser robustos. En un entorno JS tradicional, habría estado expuesto a propiedades nulas, mutaciones de estado inseguras y errores de tipografía que solo se habrían revelado mediante la ejecución manual y exhaustiva en el navegador.

TypeScript traslada la carga de la depuración del "tiempo de ejecución" al "tiempo de desarrollo". La mayor validación del esfuerzo invertido en la arquitectura de este código es la ejecución exitosa del comando `npx tsc --noEmit`. Obtener una salida de 0 errores certifica de manera concluyente que el proyecto carece de fisuras en sus contratos de datos, garantizando una alta fiabilidad antes de ser desplegado.