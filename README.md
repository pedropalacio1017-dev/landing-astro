LANDING PAGE - ALGESTA (ASTRO + CONTENTFUL)

Este proyecto es una landing page corporativa desarrollada con Astro y conectada a Contentful como CMS headless, permitiendo la gestión dinámica del contenido sin modificar el código.

TECNOLOGÍAS UTILIZADAS
Astro
HTML
CSS
JavaScript
Contentful
Vercel
Node.js
INSTALACIÓN Y EJECUCIÓN

Clonar el repositorio:

git clone <URL_DEL_REPO>
cd landing-greatness

Instalar dependencias:

npm install

Ejecutar en desarrollo:

npm run dev

Build producción:

npm run build

Preview:

npm run preview

CMS ELEGIDO: CONTENTFUL

Se eligió Contentful porque permite:

Gestión de contenido sin código
Escalabilidad para múltiples secciones
API estable y rápida
Separación entre contenido y desarrollo
Facilidad para el cliente final
ESTRUCTURA DEL CMS

Se crearon los siguientes modelos de contenido:

HEADER

Logo
Menú de navegación

HERO

Título
Subtítulo
Descripción
Botones CTA
Imagen de fondo
Imagen lateral

BENEFICIO

Título
Descripción
Ícono

SECCIONBENEFICIOS

Título
Imagen de fondo

LOGOCLIENTE

Nombre
Logo

SECCIONLOGOS

Título
Imagen de fondo

TESTIMONIO

Nombre
Cargo
Empresa
Texto
Foto

SECCIONTESTIMONIOS

Título
Imagen de fondo

CTA

Título
Descripción
Botón
Imagen de fondo

FOOTER

Logo
Links de navegación
Copyright
Política de privacidad
Términos de uso
ARQUITECTURA DEL PROYECTO

El proyecto está organizado de la siguiente forma:

components
lib/api.ts
pages/index.astro
styles/Css-global.css

Los datos se consumen desde Contentful usando getEntries y se pasan a los componentes mediante props.

DECISIONES TÉCNICAS
Uso de Astro por rendimiento y simplicidad
Separación por componentes reutilizables
Centralización de llamadas API en api.ts
Uso de Contentful como CMS headless
Diseño basado en secciones independientes
Estilos globales en CSS
MEJORAS FUTURAS
Diseño 100% responsive (mobile first)
Animaciones en scroll
Optimización de imágenes (WebP + lazy load)
Tipado con TypeScript para Contentful
Panel de preview desde CMS
Footer completamente dinámico
Integración con analytics
SUPUESTOS DEL PROYECTO
El contenido siempre viene desde Contentful
Todas las imágenes están disponibles en el CMS
Cada sección tiene un único entry principal
El cliente no modifica código directamente
La estructura del CMS no cambia frecuentemente
DEPLOY

Proyecto desplegado en Vercel:

LINK: https://landing-astro-rihrf9rhu-pedro-palacio-dev.vercel.app/

ACCESO CMS

Contentful
Space ID: ioxr0yqpiqv0
Environment: master

USO DE INTELIGENCIA ARTIFICIAL

Se utilizó ChatGPT como apoyo en:

Estructuración de componentes en Astro
Integración con Contentful
Corrección de errores en tiempo real
Optimización de CSS
Mejora de arquitectura del proyecto
Debugging de errores
Buenas prácticas de frontend

La IA fue utilizada como herramienta de apoyo, no como reemplazo del desarrollo.

AUTOR

Proyecto desarrollado como prueba técnica de landing page con CMS headless.

