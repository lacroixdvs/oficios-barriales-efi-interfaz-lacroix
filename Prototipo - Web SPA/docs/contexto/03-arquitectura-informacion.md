# 03. Arquitectura de la Información y Flujo de Pantallas

**Proyecto**: Oficios Barriales (Impulso Barrial S.R.L.)  
**Fecha de Emisión**: 13 de Noviembre de 2026  
**Versión**: 1.0 (Master Context)

---

## 1. Estructura General de la SPA (Single Page Application)

La aplicación está diseñada bajo el patrón de arquitectura de una sola página, donde las 4 vistas funcionales residen en el DOM y se activan/desactivan mediante gestión limpia de estado y eventos nativos de JavaScript (sin recargas de página ni dependencias pesadas).

```
                      ┌───────────────────────────┐
                      │    VISTA 1: INICIO        │
                      │  - Selector de Barrio     │
                      │  - Buscador Rápido        │
                      │  - Grilla 2x2 de Oficios  │
                      │  - Botón "Sumar mi oficio"│
                      └─────────────┬─────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
     ┌─────────────────────────────┐  ┌─────────────────────────────┐
     │  VISTA 2: LISTADO/FILTROS   │  │  VISTA 4: PUBLICAR OFICIO   │
     │  - Filtros rápidos          │  │  - Formulario asistido      │
     │    (Todos / Puntaje /       │  │  - Opción de trueque        │
     │     Acepta trueque)         │  │  - Guardado en localStorage │
     │  - Tarjetas de trabajadores │  └─────────────────────────────┘
     └──────────────┬──────────────┘
                    │
                    ▼
     ┌─────────────────────────────┐
     │  VISTA 3: FICHA/PERFIL      │
     │  - Datos del trabajador     │
     │  - Reputación y opiniones   │
     │  - Información de trueque   │
     │  - Barra fija inferior      │
     │    ("Llamar" / "WhatsApp")  │
     └─────────────────────────────┘
```

---

## 2. Especificación Detallada de Vistas

### Vista 1: Inicio Barrial (Home)
- **Objetivo**: Orientar al vecino de inmediato según su ubicación y urgencia técnica sin pedirle registros previos.
- **Componentes**:
  1. *Encabezado institucional*: Logo barrial accesible, nombre "Oficios Barriales" y lema "Conectando manos de confianza en Río Cuarto".
  2. *Selector de Barrio*: Menú desplegable amplio con los 4 barrios principales:
     - Barrio Alberdi
     - Barrio IPV
     - Barrio Banda Norte
     - Barrio Ciudad Nueva
     - (Opción: Todos los barrios)
  3. *Buscador por palabra clave*: Campo accesible (`min-h-[48px]`) con texto guía: *"Ej: calefón, canilla, enchufe, arreglo..."*.
  4. *Grilla 2x2 de Oficios Populares*:
     - **Plomería y Gas**: Ícono de llave inglesa + grifo.
     - **Electricidad**: Ícono de rayo + herramienta.
     - **Albañilería y Pintura**: Ícono de rodillo + fratacho.
     - **Costura y Arreglos**: Ícono de tijera + costura.
  5. *Acceso para trabajadores*: Botón prominente en tono contrastado: *"¿Tenés un oficio? Sumate gratis a la red"*.

---

### Vista 2: Listado de Resultados y Filtros
- **Objetivo**: Facilitar la comparación rápida y transparente de los profesionales disponibles en el barrio.
- **Componentes**:
  1. *Barra superior de contexto*: Muestra el barrio seleccionado y el oficio activo con botón accesible *"Cambiar búsqueda"*.
  2. *Chips / Botones de Filtro Rápido*:
     - **"Todos"** (Estado inicial activo).
     - **"Mejor puntaje"** (Ordena de 5 a 1 estrellas).
     - **"Acepta trueque"** (Filtra únicamente los que reciben herramientas, materiales o alimentos).
  3. *Tarjetas de Trabajadores (Fichas resumen)*:
     - Nombre del trabajador y avatar/foto accesible.
     - Especialidad y distintivo destacado *"Técnico Matriculado"* si corresponde.
     - Ubicación exacta (ej. *"Barrio Alberdi - a 4 cuadras de la plaza"*).
     - Estrellas de recomendación y conteo de opiniones (ej. *"★ 4.9 (18 vecinos)"*).
     - Etiqueta de trueque: *"🤝 Acepta trueque"* (color verde contrastado).
     - Botón de acción: *"Ver perfil y contactar"* (`min-h-[48px]`).

---

### Vista 3: Perfil y Ficha Detallada del Trabajador
- **Objetivo**: Cerrar la brecha de desconfianza brindando toda la información de seguridad y facilitar el contacto directo.
- **Componentes**:
  1. *Botón de regreso*: *"← Volver al listado"* accesible con foco nítido.
  2. *Bloque de Identidad y Matrícula*: Foto, nombre completo, matrícula profesional validada por entidad oficial (ej. Matrícula N° 12458 - Gasista de 2da categoría).
  3. *Zona de cobertura barrial*: Detalle de cuadras y barrios donde realiza trabajos sin costo extra de traslado.
  4. *Descripción personal de los trabajos que realiza*: Explicación clara y sin tecnicismos de las tareas cotidianas que resuelve.
  5. *Caja destacada de Trueque Vecinal*:
     - Si está activa, muestra el ícono de apretón de manos y el listado de lo que el trabajador acepta intercambiar (ej. *"Acepto pintura látex blanca, herramientas Stanley usadas o mercadería no perecedera"*).
  6. *Muro de Opiniones Vecinales*:
     - Lista de comentarios dejados por vecinos con nombre, barrio y fecha (ej. *"Doña Carmen (B° Alberdi): Carlos vino a la media hora de llamarlo, me arregló la termocupla y me cobró un precio muy justo. Súper recomendable."*).
  7. *Barra Inferior Fija de Contacto (Ley de Fitts)*:
     - Anclada en la parte inferior de la pantalla para alcance ergonómico del pulgar.
     - Dos botones de alto impacto:
       - Botón 1: **"Llamar por teléfono"** (Azul `#1D4ED8`, llamada telefónica inmediata mediante `tel:...`).
       - Botón 2: **"Enviar WhatsApp"** (Verde `#16A34A`, mensaje directo con texto precargado: *"Hola, te vi en Oficios Barriales y quería consultarte por un trabajo"*).

---

### Vista 4: Formulario "Publicar mi Oficio"
- **Objetivo**: Permitir a cualquier vecino trabajador sumarse a la plataforma en menos de 2 minutos.
- **Campos estructurados**:
  1. *Nombre y Apellido* (Texto obligatorio).
  2. *Oficio principal* (Selector: Plomero, Gasista, Electricista, Albañil, Pintor, Costurera, Jardinero, Fletes).
  3. *Barrio de Río Cuarto* (Alberdi, IPV, Banda Norte, Ciudad Nueva).
  4. *Teléfono / WhatsApp* (Número directo para recibir consultas).
  5. *¿Contás con matrícula habilitante?* (Interruptor Sí/No con campo de número de matrícula).
  6. *¿Aceptás trueque vecinal?* (Interruptor Sí/No).
  7. *¿Qué cosas o insumos te sirven para trueque?* (Campo de texto de ejemplo: *"Acepto bolsas de cal, herramientas de mano o mercadería"*).
  8. *Breve descripción de lo que hacés* (Área de texto accesible).
- **Acción final**: Botón grande *"Publicar mi oficio ahora"* con confirmación visual de guardado.

---

## 3. Modelo de Datos y Persistencia Local (`localStorage`)

Para asegurar el funcionamiento del prototipo interactivo sin necesidad de un servidor backend complejo, el estado se persiste en `localStorage` con una clave maestra `oficios_barriales_data`.

### Estructura de Datos de un Trabajador (`Trabajador`):
```javascript
{
  id: "carlos-gomez-gasista",
  nombre: "Carlos Gómez",
  oficio: "Gasista y Plomero",
  matriculado: true,
  numeroMatricula: "MAT-RC-4821",
  barrio: "Alberdi",
  telefono: "3584123456",
  whatsapp: "5493584123456",
  calificacion: 4.9,
  cantidadOpiniones: 18,
  aceptaTrueque: true,
  detalleTrueque: "Acepto herramientas de mano (llaves francesas, taladro) o bolsas de cemento/cal.",
  descripcion: "Trabajo hace más de 20 años en barrio Alberdi e IPV. Hago colocación y arreglo de calefones, termotanques, cañerías de agua y gas. Presupuesto sin cargo en la zona.",
  opiniones: [
    {
      vecino: "Marta Rodríguez",
      barrio: "Barrio Alberdi",
      fecha: "05/11/2026",
      puntaje: 5,
      comentario: "Carlos vino a la media hora, me solucionó la pérdida del calefón y fue muy respetuoso. Excelente profesional."
    },
    {
      vecino: "Héctor Rossi",
      barrio: "Barrio IPV",
      fecha: "28/10/2026",
      puntaje: 5,
      comentario: "Le pagué una parte con una lijadora que no usaba y el resto en mano. Muy buena onda y predisposición para el trueque."
    }
  ]
}
```

### Semilla Inicial de 6 Trabajadores de Río Cuarto:
1. **Carlos Gómez** (Alberdi): Gasista y Plomero matriculado (acepta trueque).
2. **Silvia Morales** (Alberdi): Costurera y Arreglos de Ropa (acepta trueque por alimentos no perecederos o telas).
3. **Jorge 'El Negro' Pereyra** (Banda Norte): Electricista instalador matriculado.
4. **Miguel Ángel Benítez** (Ciudad Nueva): Albañil y Pintor de obra (acepta trueque por materiales sobrantes de construcción).
5. **Ramón Maidana** (IPV): Fletes, Mudanzas y Desagotes.
6. **Norma 'Titi' Domínguez** (Banda Norte): Mantenimiento de Parques, Jardinería y Poda.
