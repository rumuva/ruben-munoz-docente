# Observatorio FPE · Certificados y módulos

Aplicación HTML estática para consultar certificados profesionales por código, denominación y familia.

## Archivos
- `index.html`: interfaz responsive, búsqueda, selección de fichas, seguimiento y exportación CSV.
- `data.js`: 988 certificados (588 del repertorio anterior + 400 del nuevo Grado C), 28 familias y 123 registros de módulos y prácticas vinculados a 24 certificados.

## Abrir
- GitHub Pages: https://rumuva.github.io/ruben-munoz-docente/certificados-fpe/
- Repositorio: https://github.com/rumuva/ruben-munoz-docente/tree/main/certificados-fpe
- Descarga ambos archivos en una misma carpeta y abre `index.html` para usarlo localmente.

## Consultas
El buscador y los filtros abarcan los 988 códigos. Al pulsar uno se abre su ficha y enlaces a fuentes documentales. Solo 24 códigos tienen el desglose modular verificado e incorporado en esta versión; para los 964 restantes NO se muestran módulos supuestos.

El marcado personal de certificados y módulos utiliza `localStorage` del navegador. No se sincroniza ni demuestra acreditación oficial. Se puede exportar el seguimiento como CSV.

## Subdominio personalizado (pendiente)
Nombre propuesto: `certificados.rubenmunozdocente.digital`.

La carpeta de este repositorio **no crea por sí sola un subdominio**. Para configurar una URL independiente, conviene crear un repositorio GitHub Pages independiente, publicar allí estos archivos, registrar el dominio personalizado en `Settings → Pages` y crear en el panel DNS del dominio un registro CNAME `certificados` → `rumuva.github.io`, conforme a la documentación oficial de GitHub. No añadir un CNAME a la raíz de este repositorio: podría modificar la configuración de la web docente.

Documentación: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Criterios documentales
El inventario combinado no equivale a una lista de 988 certificados individualmente vigentes; contrasta cada ficha con la autoridad competente. Las horas faltantes se indican sin inventar duración. Las equivalencias no implican identidad modular.

Versión: 17/11/2026.