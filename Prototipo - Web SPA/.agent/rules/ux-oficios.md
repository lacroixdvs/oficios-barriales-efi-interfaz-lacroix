---
trigger: always_on
description: Reglas permanentes y estándares obligatorios de UX/UI, Accesibilidad (WCAG AA+) y Stack Tecnológico para el proyecto Oficios Barriales.
---

# 🛠️ Estándares de Ingeniería de Producto, UX/UI y Accesibilidad: Oficios Barriales

Este documento define las directrices arquitectónicas, de experiencia de usuario (UX), diseño visual (UI) y accesibilidad de cumplimiento **estricto y permanente** para todas las tareas de diseño, prototipado e implementación en el proyecto **Oficios Barriales**.

---

## 1. 🏗️ Stack Tecnológico y Arquitectura

El proyecto está concebido para ser liviano, portable, de carga instantánea y ejecutable en cualquier navegador sin necesidad de herramientas complejas de compilación (cero fricción en el entorno de desarrollo).

1. **Arquitectura SPA (Single Page Application) Mobile-First**:
   - Todo diseño y maquetación comienza obligatoriamente en resoluciones móviles (`360px` a `414px`) y escala de forma progresiva a pantallas más grandes (`sm`, `md`, `lg`, `xl`).
   - La navegación entre vistas o secciones se gestiona dentro de la misma página mediante vistas dinámicas o cambios de estado limpios, garantizando transiciones suaves y tiempos de respuesta inmediatos.

2. **HTML5 Semántico Estricto**:
   - Queda terminantemente prohibido el "div-soup" (anidar `<div>` indiscriminadamente).
   - Estructuración obligatoria con etiquetas semánticas:
     - Estructura general: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
     - Formularios: `<form>`, `<fieldset>`, `<legend>`, `<label>` siempre vinculado a su control con `for="id_del_input"`, `<input>`, `<select>`, `<textarea>`, `<button type="submit|button">`.
     - Botones vs Enlaces: Un enlace `<a>` se usa **exclusivamente** para navegación o cambio de URL; un botón `<button>` se usa para acciones, aperturas de modales o envíos de formulario.

3. **TailwindCSS vía CDN**:
   - Para garantizar portabilidad inmediata, se incluye TailwindCSS mediante script CDN:
     ```html
     <script src="https://cdn.tailwindcss.com"></script>
     ```
   - Uso de clases utilitarias estándar y legibles.
   - Configuración de colores, fuentes y extensiones mediante `tailwind.config` inline cuando sea necesario.

4. **JavaScript Modular Limpio (Vanilla Estándar sin CORS)**:
   - Uso de JavaScript Vanilla estándar sin dependencias externas ni `type="module"` para garantizar compatibilidad total con el protocolo `file://` (doble clic desde el explorador de archivos sin servidor local).
   - Encapsulamiento en IIFE o funciones limpias.
   - Separación lógica de responsabilidades:
     - **Estado**: Manejo reactivo de la vista actual, filtros y selección barrial.
     - **Datos y Almacenamiento**: Persistencia local (`localStorage`) con respaldo automático en memoria ante entornos con permisos restringidos.
     - **Renderizado y Vistas**: Generación de HTML semántico accesible según el estado.
     - **Controladores y Eventos**: Manejo de clicks, búsquedas, filtros y envíos de formulario.

---

## 2. 🗣️ Idioma y Microcopy (100% Español Argentino Cotidiano)

La plataforma conecta a vecinos y trabajadores barriales en la vida real. La comunicación debe transmitir calidez, confianza, cercanía y total claridad.

1. **Voseo y Tono Rioplatense Natural**:
   - Emplear siempre el voseo argentino: *“Buscá al profesional que necesitás”*, *“Contactá por WhatsApp”*, *“Dejanos tu consulta”*, *“Mirá los presupuestos”*, *“Sumate a la red”*.
   - Tratamiento de igual a igual, empático, sin caer en lunfardos marginales ni en formalismos artificiales ("usted").

2. **Prohibición Total de Anglicismos y Jerga Técnica**:
   - **Prohibidos los términos en inglés**:
     - ❌ *Login / Sign in* ➔ ✔️ **Entrar / Iniciar sesión**
     - ❌ *Sign up / Register* ➔ ✔️ **Registrate / Creá tu cuenta / Sumate**
     - ❌ *Dashboard* ➔ ✔️ **Mi panel / Mis publicaciones / Mi cuenta**
     - ❌ *Card* ➔ ✔️ **Ficha / Tarjeta del oficio**
     - ❌ *Landing / Home* ➔ ✔️ **Inicio / Página principal**
     - ❌ *Feedback* ➔ ✔️ **Opiniones / Calificaciones de vecinos**
     - ❌ *Rating* ➔ ✔️ **Puntaje / Estrellas**
     - ❌ *Checkout* ➔ ✔️ **Confirmar pedido / Finalizar**
     - ❌ *Placeholder* ➔ ✔️ **Texto de ejemplo / Guía**
     - ❌ *Badge* ➔ ✔️ **Etiqueta / Distintivo**
     - ❌ *Toggle* ➔ ✔️ **Interruptor / Cambiar opción**
     - ❌ *Tips* ➔ ✔️ **Consejos útiles**
   - **Prohibida la jerga técnica para el usuario**:
     - ❌ *“Error 404”* ➔ ✔️ *“No encontramos lo que buscabas. Probá buscando de vuelta.”*
     - ❌ *“Fallo de autenticación”* ➔ ✔️ *“El correo o la contraseña no coinciden. Revisalos y volvé a probar.”*
     - ❌ *“Error en el payload / timeout”* ➔ ✔️ *“Tuvimos un problemita de conexión. Revisá tus datos o WiFi y reintentá.”*

3. **Nomenclatura Clara de Oficios y Changas**:
   - Usar denominaciones populares y comprensibles para cualquier persona del barrio: *Plomero / Gasista, Electricista, Albañil, Pintor, Carpintero, Herrero, Flete y Mudanzas, Cuidado de personas, Costurera / Modista, Jardinería*.

---

## 3. ♿ Accesibilidad (WCAG 2.1 Nivel AA+)

El público objetivo incluye personas de todas las edades, en condiciones de baja visibilidad (pantalla al sol en la vereda) o con dispositivos móviles económicos.

1. **Tipografía Base y Escala**:
   - Tamaño base mínimo de lectura: **16px** (`text-base` / `1rem`).
   - Textos secundarios / notas: Nunca inferiores a **14px** (`text-sm`). Queda prohibido el uso de tamaños inferiores como `10px` o `12px` para información relevante.
   - Altura de línea confortable: Mínimo `leading-relaxed` (1.5) o `leading-normal` para evitar aglomeración de texto.

2. **Áreas Táctiles (Hit Targets) de Mínimo 48px**:
   - Todo elemento accionable (botones, links, campos de texto, selectores, checkboxes, switches, iconos clickeables) debe tener un área táctil mínima de **48 x 48 píxeles** (`min-h-[48px]`, `min-w-[48px]`, clase `h-12` o `p-3`).
   - Margen de seguridad: Espaciado mínimo de `8px` a `12px` entre botones o controles contiguos para prevenir toques accidentales con el pulgar.

3. **Contraste de Color de Alto Impacto (WCAG AA / AAA)**:
   - Ratios de contraste obligatorios:
     - Texto normal (< 18pt): Mínimo **4.5:1** (idealmente **7:1** para WCAG AAA).
     - Texto grande (≥ 18pt o negrita ≥ 14pt) y componentes de UI: Mínimo **3:1**.
   - Prohibido el uso de grises claros (`text-gray-300` / `text-gray-400`) sobre fondos claros (`bg-white` / `bg-gray-50`) para textos informativos.
   - Todo indicador de estado (éxito, error, advertencia) no debe depender únicamente del color; debe acompañarse de un icono y un texto explicativo.

4. **Etiquetado Semántico y Atributos ARIA**:
   - Cada botón con icono exclusivo (por ejemplo, lupa de búsqueda, botón de menú hamburguesa, botón de cerrar modal o botón de WhatsApp) debe incluir obligatoriamente:
     - `aria-label="Descripción clara de la acción"` (ej.: `aria-label="Contactar al plomero por WhatsApp"`).
   - Los formularios deben contar con etiquetas explícitas o `aria-labelledby` / `aria-describedby` para asociar mensajes de error e instrucciones.
   - Estados dinámicos reflejados con atributos estándar: `aria-expanded="true|false"` para desplegables, `aria-busy="true"` durante estados de carga, `aria-live="polite"` para alertas o mensajes que se actualizan sin recargar la página.

---

## 4. 🎛️ Estados UI Obligatorios para Todo Componente Interactivo

Cualquier componente que reciba interacción del usuario (botones, tarjetas clickeables, inputs, chips de filtro, acordeones) debe contemplar y estilizar de forma explícita los siguientes 5 estados:

| Estado | Descripción y Requerimiento Visual | Clases Tailwind sugeridas |
| :--- | :--- | :--- |
| **1. Normal (Idle)** | Estado de reposo con affordance visual claro (bordes definidos, color distinguible, sombra sutil). | `bg-blue-700 text-white shadow-sm rounded-xl` |
| **2. Cursor encima (Hover)** | Respuesta visual evidente cuando el puntero del mouse pasa por encima (en computadoras o tablets). | `hover:bg-blue-800 hover:shadow-md transition-all duration-150` |
| **3. Foco visible (Focus Visible)** | Contorno o anillo de alto contraste para usuarios que navegan mediante teclado o lectores de pantalla. **Prohibido `outline-none` sin reemplazo**. | `focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2` |
| **4. Activo / Presionado (Active)** | Sensación táctil de pulsación inmediata al hacer clic o tocar con el dedo. | `active:scale-[0.98] active:bg-blue-900 transition-transform` |
| **5. Confirmación / Feedback claro** | Retroalimentación de los distintos momentos del flujo: carga, éxito, error y deshabilitado. | Ver detalle debajo 👇 |

### Detalle de Sub-estados de Feedback:
- **Carga (Loading)**:
  - Mostrar spinner accesible o esqueleto (skeleton screen) animado.
  - El botón pasa a estado `aria-busy="true"` y se desactiva temporalmente el reenvío de formulario para evitar envíos dobles.
  - Texto indicativo: *“Guardando...”*, *“Buscando trabajadores cerca...”*.
- **Éxito (Success)**:
  - Mensaje claro con fondo de contraste adecuado (ej. verde oscuro `text-emerald-900 bg-emerald-100 border border-emerald-400`).
  - Icono de confirmación (tilde o check) y mensaje en español cotidiano: *“¡Listo! Tu mensaje ya se envió al electricista.”*
- **Error (Error)**:
  - Borde e indicador en rojo contrastado (`border-red-600 bg-red-50 text-red-900`).
  - Explicación de cómo solucionarlo: *“Por favor ingresá un número de teléfono válido para que puedan llamarte.”*
  - Asociación con `aria-invalid="true"` y `aria-describedby="id-error"`.
- **Deshabilitado (Disabled)**:
  - Estilo atenuado sin perder legibilidad (`opacity-60 cursor-not-allowed`).
  - Debe ser evidente por qué está bloqueado (por ejemplo, indicando los campos faltantes mediante microcopy).

---

## 5. 📋 Lista de Verificación (Checklist) para cada nuevo Componente o Vista

Antes de dar por finalizada cualquier funcionalidad o componente en el proyecto, validar:
- [ ] ¿Está pensado y verificado primero en pantalla de celular (`360px`)?
- [ ] ¿Utiliza HTML5 semántico sin abusar de contenedores genéricos `<div>`?
- [ ] ¿TailwindCSS funciona inmediatamente mediante CDN sin requerir compiladores?
- [ ] ¿El JavaScript está estructurado en módulos nativos y sin bibliotecas innecesarias?
- [ ] ¿El microcopy está 100% en español argentino coloquial (voseo), libre de anglicismos y tecnicismos?
- [ ] ¿El texto base mide al menos 16px y no hay textos menores a 14px?
- [ ] ¿Todos los botones y campos interactivos tienen al menos 48px de altura táctil?
- [ ] ¿Los colores superan el contraste mínimo de WCAG AA (4.5:1)?
- [ ] ¿Los iconos y controles sin texto tienen su `aria-label` descriptivo?
- [ ] ¿Se definieron los 5 estados interactivos (normal, hover, focus visible, active, feedback/carga/error)?
