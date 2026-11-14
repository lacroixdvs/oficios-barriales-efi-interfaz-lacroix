# 04. Sistema de Diseño Visual y Experiencia de Usuario (UI/UX)

**Proyecto**: Oficios Barriales (Impulso Barrial S.R.L.)  
**Fecha de Emisión**: 13 de Noviembre de 2026  
**Versión**: 1.0 (Master Context)

---

## 1. Fundamentos Visuales y Tokens de Diseño

El sistema de diseño de **Oficios Barriales** prioriza la **legibilidad absoluta bajo luz solar directa**, la **ergonomía para pantallas móviles** y la **claridad cognitiva** para usuarios de todas las edades.

### 1.1 Paleta de Color Institucional y Accesible

| Nombre del Token | Código HEX | Utilidad Tailwind | Ratio de Contraste | Propósito de Uso |
| :--- | :--- | :--- | :--- | :--- |
| **Fondo Base** | `#F8FAFC` | `bg-slate-50` | 13.5:1 vs Texto | Fondo general de la aplicación, relajante para la vista y bajo brillo. |
| **Superficie** | `#FFFFFF` | `bg-white` | 14.1:1 vs Texto | Contenedores de tarjetas, modales y formularios. |
| **Texto Primario** | `#0F172A` | `text-slate-900` | 14.1:1 (AAA) | Títulos, nombres de trabajadores, precios y etiquetas clave. |
| **Texto Secundario**| `#334155` | `text-slate-700` | 7.3:1 (AAA) | Descripciones, opiniones vecinales, fechas y datos de barrio. |
| **Azul Confianza** | `#1D4ED8` | `bg-blue-700` / `text-blue-700` | 4.8:1 (AA+) | Botones de acción primaria, llamado telefónico, enlaces destacados. |
| **Verde Solidario**| `#16A34A` | `bg-green-600` / `text-green-800`| 5.1:1 (AA+) | Acción de WhatsApp directo y distintivo de **Trueque Vecinal**. |
| **Dorado Vecinal** | `#D97706` | `text-amber-600` | 4.5:1 (AA) | Estrellas de puntuación y reconocimientos comunitarios. |
| **Borde / Divisor** | `#CBD5E1` | `border-slate-300`| 3.2:1 | Separaciones nítidas entre elementos sin generar ruido visual. |

---

## 2. Tipografía y Jerarquía de Texto

Se utiliza una pila tipográfica Sans-Serif humanista y legible (predominando **Inter** o tipografía nativa del sistema optimizada para pantallas táctiles).

### Escala Tipográfica Estricta:
1. **Títulos Principales (H1 / Portada)**: `24px` a `28px` (`text-2xl` / `text-3xl`), peso semibold/bold (`font-bold`), altura de línea confortable (`leading-tight`).
2. **Encabezados de Sección y Fichas (H2 / H3)**: `20px` a `22px` (`text-xl`), peso destacado (`font-semibold`).
3. **Cuerpo de Lectura y Controles (P, A, Button, Input)**: **Mínimo 16px** (`text-base`), peso regular o medium, altura de línea `leading-relaxed` (1.5). Queda terminantemente prohibido usar 12px o 10px.
4. **Textos Secundarios y Metadatos**: Mínimo `14px` (`text-sm`), reservado exclusivamente para fechas, notas al pie y categorías secundarias.

---

## 3. Jerarquía Visual en la Ficha del Trabajador

Para responder al modelo mental de vecinos como Marta y facilitar decisiones seguras en menos de 5 segundos, la tarjeta y la ficha organizan la información en este orden estricto:

```
┌─────────────────────────────────────────────────────────────┐
│ 1° ★★★★★ 4.9 (18 vecinos de Alberdi lo recomiendan)        │ <── Máxima jerarquía
├─────────────────────────────────────────────────────────────┤
│ 2° Carlos Gómez — Gasista y Plomero Matriculado            │ <── Identidad y oficio
├─────────────────────────────────────────────────────────────┤
│ 3° 📍 Barrio Alberdi (a 4 cuadras de la plaza)              │ <── Cercanía geográfica
├─────────────────────────────────────────────────────────────┤
│ 4° 🤝 Acepta trueque por herramientas o mercadería         │ <── Economía solidaria
│    [ Botón: Ver perfil y opiniones ]                       │ <── Acción secundaria
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Metáforas Visuales y Modelo Mental Universal

La plataforma no utiliza términos informáticos ni íconos abstractos. Emplea analogías directas de la vida barrial:

1. **Teléfono Clásico 📞**: Representa la llamada telefónica tradicional directa (especial para personas mayores que no desean chatear).
2. **WhatsApp 💬 / Verde**: Representa la mensajería instantánea conocida por cualquier vecino de Río Cuarto.
3. **Apretón de Manos 🤝**: Representa el acuerdo mutuo de **trueque vecinal**, evocando confianza, pacto de palabra y solidaridad barrial.
4. **Estrellas y Vecinos 🌟**: Representa el clásico "boca en boca" del almacén llevado a la pantalla digital.
5. **Matrícula y Sello 🛡️**: Representa la seguridad de un técnico validado oficialmente para evitar accidentes domésticos.

---

## 5. Ergonomía Móvil y Ley de Fitts

La **Ley de Fitts** establece que el tiempo requerido para alcanzar un objetivo depende del tamaño del objetivo y de la distancia hasta él.

### Directrices de Aplicación:
1. **Zona de Alcance Natural del Pulgar**:
   - En la vista de perfil/ficha del trabajador, los dos botones principales (**"Llamar por teléfono"** y **"Enviar WhatsApp"**) están **fijados en una barra inferior flotante (`fixed bottom-0 left-0 right-0`)**.
   - Esto permite que el vecino pueda accionar el contacto con el pulgar de una sola mano mientras camina o sostiene algo en el hogar.
2. **Dimensiones Mínimas de Contacto Táctil**:
   - Todos los botones, campos de texto y selectores tienen un alto mínimo de **48px** (`h-12` o `min-h-[48px]`).
   - El ancho de los botones de llamada y WhatsApp ocupa el 100% del contenedor o 50% en dúo simétrico, evitando toques fallidos.
3. **Separación Táctil Preventiva**:
   - Margen mínimo de `12px` entre botones adyacentes para impedir toques erróneos en celulares pequeños.

---

## 6. Estados de UI Obligatorios para Todo Componente Interactivo

Cada componente interactivo cuenta con 5 estados normalizados:

| Estado | Comportamiento Visual | Clases Tailwind Estándar |
| :--- | :--- | :--- |
| **1. Normal (Reposo)** | Color vivo, contraste superior a 4.5:1, bordes suaves, sombra ligera. | `bg-blue-700 text-white rounded-xl shadow-sm min-h-[48px]` |
| **2. Cursor encima (Hover)** | Aumento de luminosidad o saturación y elevación sutil. | `hover:bg-blue-800 hover:shadow-md transition-all` |
| **3. Foco Visible (`focus-visible`)** | Anillo ancho de alto contraste de 4px con separación. | `focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2` |
| **4. Pulsado / Activo (`active`)** | Efecto de presión táctil inmediata. | `active:scale-[0.98] active:bg-blue-900` |
| **5. Feedback (Carga / Éxito / Error)** | Avisos explicativos claros y accesibles. | Ver detalle de feedback a continuación: |

### Implementación del Feedback:
- **Carga**: Indicador giratorio accesible junto a texto visible: *"Guardando tu oficio..."*. El botón pasa a `aria-busy="true"` y se inhabilita para prevenir doble clic.
- **Éxito**: Caja verde suave (`bg-emerald-50 border-emerald-400 text-emerald-950`) con ícono de tilde: *"¡Listo! Tu oficio ya está visible en Barrio Alberdi."*
- **Error**: Borde rojo nítido (`border-red-600 bg-red-50 text-red-950`) con explicación sin términos técnicos: *"Por favor escribí tu número de teléfono para que los vecinos puedan contactarte."*
