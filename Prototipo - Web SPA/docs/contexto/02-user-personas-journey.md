# 02. Arquetipos de Usuario (User Personas) y Mapa de Viaje (Journey Map)

**Proyecto**: Oficios Barriales (Impulso Barrial S.R.L.)  
**Fecha de Emisión**: 13 de Noviembre de 2026  
**Versión**: 1.0 (Master Context)

---

## 1. Arquetipos de Usuario (User Personas)

### Perfil 1: Marta Rodríguez (La Vecina Demandante)
*“Necesito que alguien de confianza me arregle el calefón sin que me dé vueltas ni me cobre una locura.”*

- **Edad**: 62 años.
- **Ocupación**: Jubilada docente.
- **Ubicación**: Barrio Alberdi, Río Cuarto.
- **Dispositivo**: Celular Android de gama básica con pantalla de 5.5", conexión móvil prepaga o WiFi barrial inestable.
- **Nivel de Competencia Digital**: Bajo. Utiliza WhatsApp para hablar con su familia, ve noticias y realiza llamadas tradicionales. Se asusta con contraseñas complejas, ventanas emergentes y palabras en inglés.
- **Situación Crítica**: En plena ola de frío se le apaga el calefón y pierde una gota de agua. Teme una pérdida de gas y no sabe a quién llamar; sus hijos trabajan y no pueden ir a ayudarla de inmediato.
- **Objetivos y Metas**:
  - Encontrar rápido a un gasista que esté matriculado y viva cerca (en Alberdi o IPV).
  - Ver opiniones reales de otros vecinos para no meter a un desconocido sin referencias en su casa.
  - Tocar un solo botón grande para llamar por teléfono o mandar un mensaje de WhatsApp directo.
  - Leer todo claro, sin tener que ponerse los lentes de aumento para descifrar letras diminutas.
- **Frustraciones Comunes**:
  - Aplicaciones que exigen "crear cuenta", ingresar correo electrónico y recordar contraseñas.
  - Botones chiquitos que toca sin querer y la llevan a pantallas desconocidas.
  - Grupos de Facebook llenos de publicaciones mezcladas, chistes y comentarios sin control de identidad.

---

### Perfil 2: Carlos Gómez (El Trabajador de Oficio)
*“Quiero trabajar en mi barrio, con gente conocida, y si no hay plata en efectivo, arreglamos con un trueque justo.”*

- **Edad**: 48 años.
- **Ocupación**: Gasista y plomero matriculado independiente.
- **Ubicación**: Barrio Alberdi, Río Cuarto (cubre también IPV y Ciudad Nueva).
- **Dispositivo**: Smartphone estándar con pantalla táctil algo rayada por el uso en obra, datos móviles 4G.
- **Nivel de Competencia Digital**: Medio. Usa WhatsApp Business a diario, responde mensajes de clientes, saca fotos de sus instalaciones y coordina visitas.
- **Situación Crítica**: En meses donde la economía se frena, las contrataciones de instalaciones completas bajan. Le cuesta llegar a fin de mes manteniendo su camioneta y reponiendo herramientas caras.
- **Objetivos y Metas**:
  - Que los vecinos de Alberdi e IPV sepan que él es técnico matriculado y vive a pocas cuadras.
  - Ofrecer reparaciones rápidas y mantenimiento sin tener que pagar comisiones a intermediarios ni publicidad en diarios.
  - Habilitar la opción de **trueque vecinal**: aceptar pintura, herramientas de mano o mercadería a cambio de su mano de obra calificada.
  - Tener una ficha simple y clara que pueda compartir por WhatsApp con sus clientes habituales.
- **Frustraciones Comunes**:
  - Que lo llamen desde la otra punta de Río Cuarto (como Las Higueras) para un trabajo chico donde gasta más en nafta que lo que cobra.
  - Competir contra personas no matriculadas que cobran baratísimo pero hacen instalaciones peligrosas.
  - Portales laborales complicados que le descuentan porcentajes de sus ingresos.

---

## 2. Mapa de Viaje del Usuario (User Journey Map)

A continuación se detalla el recorrido extremo a extremo de Marta al buscar auxilio técnico en la plataforma:

```
[ PASO 1: INICIO ] ──> [ PASO 2: EXPLORACIÓN ] ──> [ PASO 3: DECISIÓN ] ──> [ PASO 4: ACCIÓN ]
  Elige su barrio         Filtra por oficio           Revisa reputación,          Toca "Llamar" o
  y ve los oficios        y matrícula                 estrellas y trueque         "WhatsApp" directo
```

### Detalle de Etapas del Viaje:

| Etapa | Acciones del Usuario (Marta) | Pensamientos y Emociones | Puntos de Dolor Resueltos en la UI |
| :--- | :--- | :--- | :--- |
| **1. Inicio (Llegada)** | Abre el enlace en su celular. Selecciona *"Barrio Alberdi"* en el selector principal y presiona el botón grande *"Gasistas"*. | *“Qué alivio, no me pidió contraseña ni me abrió anuncios molestos.”* | Selector barrial predeterminado con letras grandes (mínimo 16px/18px) y botones táctiles amplios (mínimo 48px). |
| **2. Exploración (Filtrado)** | Visualiza la lista de gasistas disponibles en Alberdi. Observa los distintivos de *"Matriculado"* y las estrellas. | *“Mira qué bueno, Carlos está acá nomás en mi barrio y tiene 5 estrellas.”* | Tarjetas claras con contraste alto, ordenadas por cercanía y reputación comunitaria. |
| **3. Decisión (Confianza)** | Abre la ficha de Carlos. Lee las opiniones de vecinos del barrio y ve que acepta trueque por herramientas o mercadería. | *“La vecina de la calle Salta le dejó muy buen comentario, me da tranquilidad.”* | Microcopy en español cotidiano, opiniones con fecha y nombres reales de vecinos. |
| **4. Contacto (Acción en un toque)** | Presiona la barra inferior fija donde está el botón verde *"Mandar WhatsApp"* o el azul *"Llamar por teléfono"*. | *“¡Listo! Con un solo toque ya le estoy hablando directamente a él.”* | Barra fija en la parte inferior de la pantalla (ergonomía del pulgar / Ley de Fitts). |

---

## 3. Recorrido del Trabajador: Publicación de Oficio

Carlos necesita registrar su servicio en minutos:

1. **Acceso directo**: Toca el botón destacado *"Sumar mi oficio"* en la portada o en el pie de página.
2. **Formulario amigable**:
   - Ingresa nombre, teléfono/WhatsApp, oficio, número de matrícula (opcional pero destacado) y barrio.
   - Activa el interruptor *"¿Aceptás trueque vecinal?"* y escribe brevemente qué cosas le sirven (ej. *"Acepto herramientas o pintura"*).
   - Escribe una descripción breve de su experiencia.
3. **Confirmación inmediata**: Al tocar *"Publicar mi oficio ahora"*, el sistema guarda sus datos en `localStorage`, le muestra una confirmación en verde y lo redirige a su nueva ficha visible para todos los vecinos.
