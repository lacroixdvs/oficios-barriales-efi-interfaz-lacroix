# 06. Registro de Decisiones de Arquitectura (ADR - Architectural Decision Records)

**Proyecto**: Oficios Barriales (Impulso Barrial S.R.L.)  
**Fecha de Registro**: 13 de Noviembre de 2026  
**Estado General**: Aprobado y Vigente  
**Versión**: 1.0 (Master Context)

---

## Índice de Decisiones

1. [ADR-001: Arquitectura Web SPA Mobile-First con Vanilla ES Modules](#adr-001-arquitectura-web-spa-mobile-first-con-vanilla-es-modules)
2. [ADR-002: Adopción de TailwindCSS vía CDN sin Herramientas de Compilación](#adr-002-adopción-de-tailwindcss-vía-cdn-sin-herramientas-de-compilación)
3. [ADR-003: Persistencia en el Navegador con localStorage y Semilla de Datos Inicial](#adr-003-persistencia-en-el-navegador-con-localstorage-y-semilla-de-datos-inicial)
4. [ADR-004: Integración Nativa del Sistema de Trueque Vecinal](#adr-004-integración-nativa-del-sistema-de-trueque-vecinal)
5. [ADR-005: Política Estricta de Idioma y Microcopy 100% Rioplatense sin Anglicismos](#adr-005-política-estricta-de-idioma-y-microcopy-100-rioplatense-sin-anglicismos)
6. [ADR-006: Ergonomía de Contacto según Ley de Fitts y Barra Inferior Fija](#adr-006-ergonomía-de-contacto-según-ley-de-fitts-y-barra-inferior-fija)

---

### ADR-001: Arquitectura Web SPA Mobile-First con Vanilla JavaScript Estándar
- **Fecha**: 13/11/2026 (Actualizado)
- **Estado**: Aceptado
- **Contexto**: Se requiere una solución liviana, de carga instantánea en redes móviles 3G/4G y teléfonos de gama básica, ejecutable de inmediato en cualquier navegador al hacer doble clic sobre `index.html` sin servidores locales (protocolo `file://`).
- **Decisión**: Implementar una Single Page Application (SPA) con JavaScript Vanilla estándar (sin `type="module"` ni `import`/`export` externos que activen bloqueos de CORS en Chrome bajo el protocolo `file://`). La lógica de la aplicación se unifica antes del cierre de `</body>` en `index.html` y se mantiene sincronizada en `app.js` encapsulada en una función autoejecutable (IIFE).
- **Consecuencias**:
  - *Positivas*: 100% portable y autónomo. Al hacer doble clic en `index.html` en cualquier computadora o teléfono, todas las transiciones SPA, filtros, buscador y persistencia funcionan sin requerir servidores locales (`http://localhost` ni `npx serve`).
  - *Negativas*: El código de vistas y estado se agrupa en un único contexto de ejecución estándar en lugar de módulos ES separados.

---

### ADR-002: Adopción de TailwindCSS vía CDN sin Herramientas de Compilación
- **Fecha**: 13/11/2026
- **Estado**: Aceptado
- **Contexto**: Para prototipar con rapidez respetando un sistema de diseño consistente, se evaluó utilizar CSS puro vs frameworks utilitarios vs herramientas empaquetadas (Node/Vite).
- **Decisión**: Utilizar TailwindCSS cargado exclusivamente a través de su script CDN oficial (`https://cdn.tailwindcss.com`).
- **Consecuencias**:
  - *Positivas*: Portabilidad absoluta del proyecto. No se requiere `npm install`, `node_modules` ni scripts de empaquetado. Se cuenta con toda la gama de utilidades para layout, espaciado, colores accesibles y estados interactivos.
  - *Negativas*: El archivo CDN es más pesado que un CSS purgado en producción final; no obstante, para el alcance de este MVP y prototipo EFI el impacto es insignificante frente a la ganancia de portabilidad y velocidad de desarrollo.

---

### ADR-003: Persistencia en el Navegador con localStorage y Semilla de Datos Inicial
- **Fecha**: 13/11/2026
- **Estado**: Aceptado
- **Contexto**: Para evaluar la experiencia completa de punta a punta, el usuario debe poder publicar un nuevo oficio en la Vista 4 y ver inmediatamente su tarjeta en la lista de resultados sin depender de una base de datos o backend en la nube.
- **Decisión**: Emplear `localStorage` con la clave `oficios_barriales_data`. Al arrancar la aplicación por primera vez, si la clave no existe, se siembra automáticamente un catálogo inicial con 6 trabajadores representativos de los barrios Alberdi, IPV, Banda Norte y Ciudad Nueva de Río Cuarto.
- **Consecuencias**:
  - *Positivas*: La aplicación es 100% interactiva, almacena nuevos datos de forma real entre recargas del navegador y funciona sin conexión a internet permanente.
  - *Negativas*: Los datos son locales al dispositivo o navegador del usuario actual.

---

### ADR-004: Integración Nativa del Sistema de Trueque Vecinal
- **Fecha**: 13/11/2026
- **Estado**: Aceptado
- **Contexto**: En las comunidades periféricas de Río Cuarto, la falta de liquidez monetaria no impide la necesidad de arreglos esenciales en el hogar. Los trabajadores muchas veces prefieren recibir insumos de trabajo o víveres antes que quedarse sin actividad.
- **Decisión**: Incorporar el **trueque vecinal** como una funcionalidad de primer nivel:
  - Filtro dedicado en el listado de resultados.
  - Distintivo visual verde con ícono de apretón de manos 🤝 en las tarjetas.
  - Sección específica en el perfil donde se aclara qué bienes o servicios acepta el trabajador.
  - Campo estructurado en el formulario de publicación de oficio.
- **Consecuencias**:
  - *Positivas*: Genera un valor social diferencial frente a plataformas comerciales tradicionales y estimula la economía circular solidaria.
  - *Negativas*: Requiere educar visualmente al usuario para que comprenda que el trueque es acordado libremente entre partes.

---

### ADR-005: Política Estricta de Idioma y Microcopy 100% Rioplatense sin Anglicismos
- **Fecha**: 13/11/2026
- **Estado**: Aceptado
- **Contexto**: El público objetivo comprende adultos mayores (como Marta) y vecinos de barrios populares que sienten rechazo o confusión ante interfaces redactadas en español neutro o repletas de anglicismos tecnológicos (*login*, *dashboard*, *feedback*, *tips*).
- **Decisión**: Prohibir taxativamente anglicismos y tecnicismos en la interfaz. Toda la redacción utiliza el voseo argentino cotidiano (*"Buscá al plomero que necesitás"*, *"Sumate a la red"*), denominaciones populares de oficios y mensajes de estado que transmitan contención y calidez.
- **Consecuencias**:
  - *Positivas*: Reduce a cero la barrera cognitiva de comprensión, transmite pertenencia comunitaria y genera confianza inmediata.
  - *Negativas*: Obliga a una revisión manual minuciosa de cada cadena de texto para evitar el deslizamiento inconsciente de términos del argot técnico de desarrollo.

---

### ADR-006: Ergonomía de Contacto según Ley de Fitts y Barra Inferior Fija
- **Fecha**: 13/11/2026
- **Estado**: Aceptado
- **Contexto**: La conversión principal de la aplicación es lograr que el vecino establezca contacto directo con el trabajador. En pantallas táctiles móviles, los botones ubicados en la parte superior o en medio del contenido suelen ser difíciles de alcanzar con el pulgar.
- **Decisión**: Fijar una barra inferior flotante (*fixed bottom bar*) en la pantalla de perfil del trabajador con dos botones de contacto de ancho completo o dúo simétrico:
  - Botón azul para llamada telefónica directa (`tel:`).
  - Botón verde para mensaje directo de WhatsApp (`https://wa.me/`).
  - Cumplimiento de área táctil mínima de 48px de alto y espaciado de seguridad.
- **Consecuencias**:
  - *Positivas*: Minimiza el tiempo de reacción (Ley de Fitts), optimiza el uso con una sola mano y garantiza que el usuario nunca pierda de vista la acción de contacto mientras lee reseñas.
  - *Negativas*: Ocupa un área fija de ~64px en la parte inferior de la pantalla, lo que exige añadir un relleno inferior (`pb-20`) al contenido para que ningún elemento quede oculto detrás de la barra.
