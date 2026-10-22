# Rubén Muñoz Docente

Web personal y portfolio de Rubén Muñoz Valadés, docente de Formación Profesional para el Empleo en Sevilla.

## Preparado para GitHub Pages

Sitio estático listo para publicarse desde la rama `main` y la carpeta `/(root)`. No requiere instalar dependencias ni ejecutar una compilación.

1. Extrae el ZIP.
2. Sube **el contenido** de la carpeta extraída al repositorio: `index.html`, `assets/` y los archivos de instrucciones. El archivo `index.html` debe verse en la primera pantalla del repositorio.
3. En **Settings → Pages**, elige **Deploy from a branch → main → /(root) → Save**.
4. Abre la URL que aparezca en esa pantalla cuando GitHub termine el despliegue.

La guía detallada está en [GUIA_GITHUB_PAGES.md](GUIA_GITHUB_PAGES.md).

## Archivos principales

| Archivo | Uso |
| --- | --- |
| `index.html` | Contenido y estructura de la web |
| `assets/css/styles.css` | Diseño, colores y adaptación a móvil |
| `assets/js/main.js` | Menú, filtros y muestras interactivas |
| `.nojekyll` | Publicación estática sin procesar la web con Jekyll |

## Abrir en el ordenador

Abre `index.html` en Chrome, Edge o Firefox, manteniendo `assets/` junto al archivo. La apertura local puede estar condicionada por las opciones de seguridad del navegador. Para comprobar la publicación, utiliza la URL de GitHub Pages, no la URL del código en github.com ni el visor de adjuntos del chat.

## Editar

- Textos, experiencia, formación y correo: `index.html`.
- Colores: variables `:root` en `assets/css/styles.css`.
- Actividades, plantillas y correo del botón Copiar: `assets/js/main.js`.
- CV: el sitio ofrece solicitarlo por correo; el PDF personal no se incluye en el repositorio público.
- El correo también figura en los datos estructurados y en la información de privacidad del HTML.

El monograma RM es tipográfico; se puede sustituir por el logotipo original. Las demostraciones usan datos ficticios y se identifican como tales. El constructor de prompts funciona con una plantilla local, sin conexión a un servicio de IA.

## Estado

Paquete preparado el 22/10/2026. Incluye las correcciones de la auditoría funcional anterior. Se han comprobado rutas relativas, archivos enlazados y funcionamiento desde una subcarpeta equivalente a un sitio de proyecto. El despliegue real se verifica después de activar GitHub Pages.

Repositorio de destino: `rumuva/ruben-munoz-docente`. Los archivos están preparados para publicarse desde `main` y `/(root)`; el estado de GitHub Pages se comprueba en Settings → Pages.

El archivo PDF del CV queda fuera de esta subida. El sitio incluye un enlace para solicitarlo por correo.
