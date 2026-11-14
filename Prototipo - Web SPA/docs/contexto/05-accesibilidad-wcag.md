# 05. Especificación de Accesibilidad Web (WCAG 2.1 Nivel AA+)

**Proyecto**: Oficios Barriales (Impulso Barrial S.R.L.)  
**Fecha de Emisión**: 13 de Noviembre de 2026  
**Versión**: 1.0 (Master Context)

---

## 1. Declaración de Compromiso con la Accesibilidad

**Oficios Barriales** adopta las Pautas de Accesibilidad para el Contenido Web (**WCAG 2.1**) en nivel **AA**, integrando criterios adicionales de nivel **AAA** en materia de contraste cromático, tamaños de área táctil y accesibilidad cognitiva.

El público destinatario abarca personas adultas mayores (representadas por el arquetipo de Marta), trabajadores en obra con pantallas sucias o expuestas a la luz solar plena, y vecinos con discapacidades visuales o motrices que utilizan lectores de pantalla o navegación por teclado.

---

## 2. Pautas Específicas por Principio de Accesibilidad

### 2.1 Principio 1: Perceptible

1. **Contraste Cromático de Alto Impacto (WCAG 1.4.3 / 1.4.6)**:
   - Todo texto sobre su respectivo fondo cumple como mínimo el ratio de **4.5:1** para texto normal y **3:1** para componentes interactivos y texto grande.
   - Para textos principales (`text-slate-900` `#0F172A` sobre `bg-white` o `bg-slate-50`), el ratio supera **14:1**, alcanzando holgadamente el estándar **AAA**.
   - Queda estrictamente prohibido utilizar grises atenuados o claros (`text-gray-300`, `text-gray-400`) para textos con contenido legible.

2. **Íconos Acompañados Siempre de Texto Literal**:
   - Ninguna acción crítica depende exclusivamente de un pictograma o ícono mudo.
   - Todo botón o indicador visual contiene el texto explícito de la acción:
     - ❌ `[ 📞 ]` ➔ ✔️ `[ 📞 Llamar por teléfono ]`
     - ❌ `[ 💬 ]` ➔ ✔️ `[ 💬 Enviar WhatsApp ]`
     - ❌ `[ 🤝 ]` ➔ ✔️ `[ 🤝 Acepta trueque vecinal ]`
   - Si por razones de espacio en un encabezado móvil se utiliza un botón con ícono exclusivo (como el botón para volver atrás o cerrar), es obligatorio incluir el atributo `aria-label` completo (ej. `aria-label="Volver a la lista de trabajadores"`).

3. **Escala Tipográfica Inclusiva**:
   - Tamaño base mínimo de lectura: **16px** (`1rem` / `text-base`).
   - Ningún texto secundario o nota explicativa puede ser inferior a **14px** (`text-sm`).
   - La altura de línea se mantiene en `leading-relaxed` (1.5) para evitar la fatiga visual en usuarios con dificultades de enfoque.

---

### 2.2 Principio 2: Operable

1. **Áreas de Contacto Táctil Extensas (WCAG 2.5.5 / 2.5.8 Target Size)**:
   - Todo componente interactivo (botones, selectores, campos de entrada, botones de opción y conmutadores) cuenta con una dimensión mínima de **48px × 48px** (`min-h-[48px]`, `h-12`).
   - Se asegura un espaciado perimetral mínimo de `8px` a `12px` entre controles continuos para mitigar toques involuntarios con el pulgar.

2. **Navegabilidad 100% por Teclado y Conmutadores**:
   - Orden lógico de tabulación secuencial (`tabindex="0"` cuando corresponda, evitando valores positivos).
   - Prohibido suprimir el contorno de foco sin proveer un reemplazo visual evidente (`outline: none` sin anillo).
   - Estilo obligatorio de foco: anillo de 4px con alto contraste y desplazamiento (`focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2`).

3. **Prevención de Atrapamiento del Foco**:
   - Ningún componente o selector bloquea la navegación con las teclas Tab, Shift+Tab, Enter o Espacio.

---

### 2.3 Principio 3: Comprensible

1. **Lenguaje y Microcopy 100% en Castellano Barrial Accesible**:
   - Redacción simple, concisa y cotidiana, sin dobles sentidos burocráticos ni abreviaturas técnicas.
   - Empleo de voseo natural rioplatense que genera proximidad sin infantilizar al usuario.
   - Cero palabras en idiomas extranjeros (anglicismos) que confundan a usuarios como Marta.

2. **Formularios con Etiquetas Visibles y Vinculadas**:
   - Todo campo `<input>`, `<select>` o `<textarea>` está precedido por un `<label>` explícito con su atributo `for="id_del_control"`.
   - Queda prohibido depender del atributo `placeholder` como única guía de llenado.

3. **Manejo Accesible de Errores y Validaciones (WCAG 3.3.1 / 3.3.2)**:
   - Cuando un campo presenta un dato faltante o inválido:
     - El campo se marca con `aria-invalid="true"`.
     - El mensaje de error visible se vincula mediante `aria-describedby="id-error"`.
     - El texto de error explica claramente qué se necesita para corregirlo, no solo que está mal (ej. *"Por favor escribí los 10 números de tu celular con código de área de Río Cuarto"*).

---

### 2.4 Principio 4: Robusto

1. **HTML5 Semántico Estricto**:
   - Uso riguroso de elementos nativos: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
   - Distinción inviolable entre enlaces (`<a>` con `href` para navegar) y botones (`<button>` para ejecutar acciones o mutar estado).

2. **Estados Dinámicos y Regiones en Vivo (ARIA Live)**:
   - Avisos dinámicos (como la confirmación de publicación de un nuevo oficio o el filtrado de resultados) se comunican mediante contenedores con `aria-live="polite"` y `role="status"`.
   - Estados de carga comunicados a través de `aria-busy="true"` para que los lectores de pantalla informen que la acción está en proceso.

---

## 3. Matriz de Validación de Accesibilidad (Checklist)

| Criterio WCAG | Requisito en Oficios Barriales | Estado |
| :--- | :--- | :--- |
| **1.4.3 Contraste Mínimo** | Texto primario ≥ 14:1, botones ≥ 4.5:1. | ✅ Cumplido |
| **1.4.4 Redimensionamiento** | La página soporta zoom de hasta 200% sin perder contenido ni superponerse. | ✅ Cumplido |
| **2.1.1 Teclado** | Todas las acciones son operables con teclado (Tab, Enter, Espacio). | ✅ Cumplido |
| **2.4.7 Foco Visible** | Anillo de enfoque de 4px contrastado visible en todo elemento enfocado. | ✅ Cumplido |
| **2.5.5 Tamaño del Objetivo** | Áreas táctiles de mínimo 48 × 48 píxeles en celulares. | ✅ Cumplido |
| **3.2.1 Al Recibir el Foco** | Enfocar un control no provoca envíos de formulario ni cambios de vista inesperados. | ✅ Cumplido |
| **3.3.2 Etiquetas o Instrucciones** | Todos los campos tienen `<label>` visible y descripción contextual. | ✅ Cumplido |
| **4.1.2 Nombre, Función, Valor** | Todos los botones de acción e íconos tienen nombre accesible y semántica clara. | ✅ Cumplido |
