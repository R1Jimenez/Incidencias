# Ecosat - Incidencias (Frontend)

Aplicación web desarrollada como parte del reto técnico para la posición de **Desarrollador de Software Junior**.

La aplicación permite registrar incidencias, consultarlas, filtrarlas según su prioridad o estado y actualizar su progreso.

## Aplicación publicada

La aplicación se encuentra disponible en:

[https://ecoincidencias.onrender.com](https://ecoincidencias.onrender.com)

## Funcionalidades principales

- Registro de incidencias con:
  - Título.
  - Descripción.
  - Prioridad baja, media o alta.
- Asignación automática del estado inicial `Nueva`.
- Visualización de las incidencias registradas.
- Filtrado simultáneo por estado y prioridad.
- Cambio de estado a:
  - `En proceso`.
  - `Resuelta`.
- Persistencia de las incidencias mediante `localStorage`.
- Validación de los campos obligatorios.
- Mensajes informativos cuando no existen incidencias o resultados para los filtros seleccionados.
- Ayuda integrada dentro de la aplicación.

## Tecnologías utilizadas

- Vue 3.
- JavaScript.
- Vue Router.
- Vite.
- HTML y CSS.
- `localStorage`.
- Git y GitHub.
- Render para la publicación de la aplicación.

## Instalación y ejecución local

## Requisitos

- Node.js `^22.18.0` o `>=24.12.0` (ver `engines` en [package.json](package.json))
- npm

## Cómo correr el proyecto localmente

1. Clona el repositorio y entra a la carpeta del proyecto:
   ```sh
   git clone https://github.com/R1Jimenez/Incidencias.git
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Levanta el servidor de desarrollo (Vite, con hot-reload):
   ```sh
   npm run dev
   ```
4. Abre la URL que muestra la terminal (por defecto [http://localhost:5173](http://localhost:5173)).

## Funcionalidades que quedaron fuera

Debido al tiempo disponible para el reto, se decidió priorizar el funcionamiento principal de la aplicación. Las siguientes funcionalidades quedaron fuera de esta versión:

- **Pruebas automatizadas:** los flujos principales fueron comprobados manualmente durante el desarrollo, pero no se implementaron pruebas unitarias ni pruebas de integración.
- **Backend y base de datos:** la aplicación funciona únicamente en el frontend y utiliza `localStorage` como mecanismo de persistencia.
- **Persistencia compartida:** las incidencias se almacenan en el navegador del usuario, por lo que no se comparten entre diferentes dispositivos o navegadores.
- **Autenticación y usuarios:** no se implementó inicio de sesión ni separación de permisos entre usuarios y administradores.
- **Edición y eliminación:** una incidencia registrada no puede editarse ni eliminarse.
- **Historial de cambios:** se guarda únicamente el estado actual de la incidencia, sin registrar cuándo o quién realizó cada modificación.

Estas funcionalidades no forman parte del alcance mínimo solicitado. Se priorizaron el registro, la consulta, el filtrado, la validación y el cambio de estado de las incidencias.

## Posibles mejoras

Si se contara con más tiempo, las siguientes mejoras serían las de mayor valor:

1. Implementar pruebas automatizadas para la lógica de registro, filtrado y actualización de estados.
2. Incorporar un backend y una base de datos para compartir las incidencias entre distintos usuarios y dispositivos.
3. Agregar autenticación y roles para controlar quién puede registrar incidencias y quién puede modificar sus estados.
4. Mostrar mensajes de confirmación después de registrar o actualizar una incidencia.
5. Mejorar la accesibilidad y la adaptación de la interfaz a dispositivos móviles.