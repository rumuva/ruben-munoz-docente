# Publicar tu web en GitHub Pages, paso a paso

Preparado para Rubén Muñoz Valadés · 22 de octubre de 2026.

## 1. Descargar y extraer

Descarga `Web_Ruben_Munoz_GitHub_Pages.zip` y utiliza «Extraer todo». Entra en la carpeta extraída. Encontrarás `index.html`, la carpeta `assets` y estas instrucciones.

**Sube los archivos extraídos; GitHub no convierte un ZIP subido en una página web.**

## 2. Elegir el repositorio

Tu repositorio es https://github.com/rumuva/ruben-munoz-docente . Si los archivos ya están subidos allí, continúa en el paso 4 para revisar GitHub Pages.

Para crear un repositorio distinto:

1. Entra en tu cuenta de GitHub.
2. Selecciona **New repository**.
3. Nombre sugerido: `ruben-munoz-docente`.
4. Si utilizas GitHub Free, el repositorio debe ser **Public** para utilizar Pages.
5. Puedes marcar **Add a README file** para que aparezca la rama inicial `main`.
6. Pulsa **Create repository**.

Al publicar la web, el correo profesional incluido será visible para sus visitantes. El CV de difusión profesional también está disponible públicamente por autorización expresa de su propietario.

## 3. Subir los archivos

Desde un ordenador:

1. Entra en el repositorio.
2. Pulsa **Add file → Upload files**.
3. Arrastra el contenido de la carpeta extraída, incluida la carpeta `assets`, a la ventana de subida. Mantén su estructura de subcarpetas.
4. Escribe un mensaje como «Añadir web profesional de Rubén Muñoz».
5. Guarda con **Commit changes** en la rama `main`.

Si GitHub pregunta por el README existente, utiliza el README del paquete para conservar las instrucciones de esta web.

**Comprobación principal:** `index.html` debe estar directamente en la raíz del repositorio, al mismo nivel que `assets`. No dejes todo dentro de una carpeta adicional `github-pages-ruben`.

El paquete incluye `.nojekyll`. Si tu explorador oculta ese archivo, puedes crearlo en GitHub con **Add file → Create new file**, usando exactamente `.nojekyll` como nombre y guardándolo en la raíz. Evita añadir `.txt` al final. Los demás archivos del paquete son rutas convencionales y no requieren configurar Jekyll.

## 4. Activar GitHub Pages

1. Abre **Settings** en el repositorio.
2. En el menú lateral, selecciona **Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. En **Branch**, elige `main`.
5. En la carpeta, selecciona `/(root)`.
6. Pulsa **Save**.
7. Cuando GitHub termine de desplegar, usa la URL mostrada en esa pantalla. Si hay un error, revisa la ejecución de Pages en **Actions**.

El patrón habitual de una web de proyecto es `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/`. Es un ejemplo: sustituye los valores o copia la URL real de Settings → Pages.

## 5. Comprobar la web publicada

- La portada muestra «Formación práctica para avanzar».
- «Portfolio» lleva a las tres muestras.
- Los filtros muestran una muestra por categoría y tres al volver a Todas.
- La práctica de ventas obtiene 1.200 € en total, 520 € en Sevilla y 680 € en Aljarafe.
- «Copiar prompt» utiliza el tema actual.
- «Descargar mi CV en PDF» abre o descarga el currículum.
- El correo abre la aplicación de email que tengas configurada.
- En el móvil, prueba el menú y la lectura de las actividades.

## Si aparece una página en blanco o un error

| Situación | Qué comprobar |
| --- | --- |
| Estás viendo código o el archivo dentro de GitHub | Abre la URL de Pages mostrada en Settings → Pages. |
| Error 404 | Comprueba `main`, `/(root)` y que `index.html` esté en la raíz. Revisa Actions si el despliegue falla. |
| Texto sin diseño | Comprueba que exista `assets/css/styles.css` y conserva mayúsculas/minúsculas. |
| Botones sin respuesta | Comprueba `assets/js/main.js`, permite JavaScript y utiliza un navegador actualizado. |
| Ves una versión anterior | Recarga la página después de que finalice el nuevo despliegue. |

La vista previa de un archivo adjunto no sustituye la prueba en la URL publicada. Las rutas del paquete son relativas para que funcionen también cuando la web esté dentro de `/NOMBRE_REPOSITORIO/`.

## Actualizar la web

Modifica los archivos correspondientes y súbelos a las mismas rutas. Tras un cambio en la rama de publicación, GitHub Pages actualiza el sitio. Configura un dominio personalizado después de comprobar que la URL de Pages funciona.

## Documentación oficial consultada

- Crear un sitio: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configurar la publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Subir archivos: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
