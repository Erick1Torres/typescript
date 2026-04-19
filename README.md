# Práctica 4: Desarrollo Full-Stack con TypeScript y React

## Descripción del Proyecto
Este proyecto es el resultado de un aprendizaje profundo sobre ecosistemas modernos de desarrollo. A través de tres módulos interconectados pero independientes, he construido un sistema de gestión universitario que pone a prueba las capacidades avanzadas de TypeScript para crear software robusto, mantenible y libre de errores comunes.

## Estructura de la Práctica
La práctica se divide en dos repositorios principales para cumplir con los estándares de arquitectura modular:

### Repositorio 1: Lógica de Negocio y Dominio (`typescript`)
* **Módulo 1:** Configuración de entornos estrictos y desarrollo de utilidades matemáticas con manejo de casos límite (`null/undefined`).
* **Módulo 2:** Modelado de un dominio universitario complejo usando interfaces, uniones discriminadas y servicios de datos genéricos asíncronos.

### Repositorio 2: Interfaz de Usuario Moderna (`react`)
* **Módulo 3:** Integración de TypeScript en React (Vite). Desarrollo de componentes genéricos reutilizables (`DataTable<T>`), gestión de estados complejos con `Partial<T>` y manejo de librerías externas con tipado estricto.

## Filosofía de Desarrollo
En todo el proyecto he aplicado principios de ingeniería de software como:
- **Seguridad de Tipos:** Detección de errores en tiempo de compilación para evitar fallos en producción.
- **Escalabilidad:** Uso de patrones como el Análisis Exhaustivo con `never` para asegurar que el código crezca sin romperse.
- **Mantenibilidad:** Código auto-documentado gracias al uso riguroso de interfaces y contratos de datos.

## Requisitos Técnicos
- Node.js
- TypeScript 5+
- Vite (para el módulo de React)
- Libreria Luxon para gestión de tiempos

---