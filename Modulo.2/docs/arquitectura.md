# Arquitectura del Módulo 2: Modelado de Dominio y Servicios de Datos

## Introducción
En este módulo, el reto fue escalar la complejidad. Pasamos de funciones simples a modelar un sistema universitario completo. Aquí es donde realmente empecé a ver cómo TypeScript ayuda a organizar la arquitectura de una aplicación real.

## Modelado de Entidades: `interface` vs `type`
Una decisión clave fue saber cuándo usar cada herramienta. 
* Utilicé **interfaces** para las entidades principales como `Estudiante` y `Asignatura`, ya que definen la estructura de los objetos que vamos a manejar. Además, apliqué el modificador `readonly` a los identificadores (ID) para asegurar que, una vez asignados, nadie pudiera cambiarlos por accidente, protegiendo la integridad de los datos.
* Reservé el uso de **type** para crear la **Unión Discriminada** de `EstadoMatricula`. Me di cuenta de que las interfaces no pueden hacer uniones lógicas, por lo que el `type` era la herramienta perfecta para definir que una matrícula solo puede estar en un estado a la vez (Activa, Suspendida o Finalizada).

## Abstracción con Genéricos en la Capa de Datos
Para no repetir código cada vez que necesitaba consultar un recurso, diseñé el `ApiClient` usando genéricos (`<T>`). Fue muy satisfactorio ver cómo una sola función `obtenerRecurso<T>` puede adaptarse para devolver cualquier tipo de dato. 

Al envolver la respuesta en una `Promise<RespuestaAPI<T>>`, logré que toda la comunicación con el "servidor" fuera predecible. Si pido un estudiante, TypeScript sabe que dentro de `datos` habrá un nombre y un email, dándome autocompletado y seguridad total en todo el flujo de datos.

## Conclusión
El Módulo 2 me enseñó a crear "contratos" entre las distintas partes de la aplicación. Gracias a esto, la lógica de negocio de la universidad está protegida por tipos que no permiten estados imposibles.