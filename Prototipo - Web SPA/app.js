/**
 * Oficios Barriales — Lógica de la SPA (Single Page Application)
 * Formato: JavaScript Estándar (Compatible con ejecución directa file:// sin módulos ni CORS)
 * Cumplimiento estricto: WCAG 2.1 AA+, microcopy 100% rioplatense, persistencia en localStorage con respaldo en memoria.
 */

(function () {
  "use strict";

  // =============================================================================
  // 1. SEMILLA INICIAL DE DATOS: 6 TRABAJADORES REALES DE RÍO CUARTO
  // =============================================================================
  var TRABAJADORES_SEMILLA = [
    {
      id: "carlos-gomez",
      nombre: "Carlos Gómez",
      oficio: "Gasista",
      tituloCompleto: "Gasista Matriculado",
      barrio: "Alberdi",
      barrioTexto: "Barrio Alberdi",
      telefono: "3584123456",
      whatsapp: "5493584123456",
      calificacion: 4.3,
      cantidadOpiniones: 20,
      aceptaTrueque: true,
      urgencias24hs: true,
      horarios: "Lun a Vie de 8:00 a 19:00 hs • Sáb de 8:00 a 13:00 hs (Urgencias 24 hs)",
      detalleTrueque: "Acepto herramientas de mano (llaves francesas, taladro) o bolsas de cemento y cal.",
      formasPago: ["Efectivo o transferencia", "Acepta trueque"],
      foto: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80",
      descripcion: "Gasista matriculado de 2da categoría con más de 20 años en barrio Alberdi e IPV. Instalación de cañerías de termofusión, colocación de calefones, termotanques y pruebas de hermeticidad con manómetro.",
      testimonio: {
        texto: "“Llegó a horario y dejó todo bien.”",
        autor: "Marta",
        barrio: "Vecina de Alberdi"
      }
    },
    {
      id: "roberto-perez",
      nombre: "Roberto Pérez",
      oficio: "Gasista",
      tituloCompleto: "Gasista y Plomero Matriculado",
      barrio: "Alberdi",
      barrioTexto: "Barrio Alberdi",
      telefono: "3584987654",
      whatsapp: "5493584987654",
      calificacion: 4.8,
      cantidadOpiniones: 16,
      aceptaTrueque: true,
      urgencias24hs: true,
      horarios: "Lun a Vie de 8:00 a 18:00 hs • Urgencias 24 hs",
      detalleTrueque: "Acepto pintura látex blanca, lijas para pared o mercadería de almacén.",
      formasPago: ["Efectivo o transferencia", "Acepta trueque"],
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      descripcion: "Especialista en artefactos a gas natural y envasado. Reparaciones de urgencia en cañerías, calderas domiciliarias y calefactores tiro balanceado en todo el sector de Alberdi.",
      testimonio: {
        texto: "“Solucionó una pérdida difícil en la cocina en una hora. Muy prolijo y cobró precio justo.”",
        autor: "Jorge",
        barrio: "Vecino de Alberdi"
      }
    },
    {
      id: "silvia-morales",
      nombre: "Silvia Morales",
      oficio: "Costurera",
      tituloCompleto: "Costurera y Modista Barrial",
      barrio: "IPV Alberdi",
      barrioTexto: "IPV Alberdi",
      telefono: "3584223344",
      whatsapp: "5493584223344",
      calificacion: 4.9,
      cantidadOpiniones: 24,
      aceptaTrueque: true,
      urgencias24hs: false,
      horarios: "Lun a Vie de 9:00 a 18:00 hs • Sáb de 9:00 a 13:00 hs",
      detalleTrueque: "Acepto retazos de tela de tapicería, hilos de coser o mercadería no perecedera.",
      formasPago: ["Efectivo o transferencia", "Acepta trueque"],
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      descripcion: "Taller barrial de costura. Arreglo de cierres, dobladillos de pantalones, achique de prendas, confección de ropa de trabajo y uniformes escolares para los chicos del barrio.",
      testimonio: {
        texto: "“Me arregló los uniformes del colegio de los chicos rapidísimo y quedaron impecables.”",
        autor: "Gladys",
        barrio: "Vecina de IPV Alberdi"
      }
    },
    {
      id: "jorge-pereyra",
      nombre: "Jorge 'El Negro' Pereyra",
      oficio: "Electricidad",
      tituloCompleto: "Electricista Instalador Matriculado",
      barrio: "Banda Norte",
      barrioTexto: "Banda Norte",
      telefono: "3584334455",
      whatsapp: "5493584334455",
      calificacion: 4.7,
      cantidadOpiniones: 19,
      aceptaTrueque: false,
      urgencias24hs: false,
      horarios: "Lun a Vie de 8:00 a 19:00 hs • Sáb de 8:00 a 14:00 hs",
      detalleTrueque: "",
      formasPago: ["Efectivo o transferencia"],
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      descripcion: "Instalaciones eléctricas residenciales y comerciales. Armado y normalización de tableros con disyuntor y térmicas, recableado reglamentario, búsqueda de cortocircuitos y luminarias.",
      testimonio: {
        texto: "“Encontró el cortocircuito al toque con el tester y cambió la térmica enseguida.”",
        autor: "Esteban",
        barrio: "Vecino de Banda Norte"
      }
    },
    {
      id: "miguel-benitez",
      nombre: "Miguel Ángel Benítez",
      oficio: "Plomería",
      tituloCompleto: "Plomero y Sanitarista",
      barrio: "Ciudad Nueva",
      barrioTexto: "Ciudad Nueva",
      telefono: "3584556677",
      whatsapp: "5493584556677",
      calificacion: 4.6,
      cantidadOpiniones: 14,
      aceptaTrueque: true,
      urgencias24hs: false,
      horarios: "Lun a Sáb de 8:00 a 18:00 hs",
      detalleTrueque: "Acepto caños sobrantes de termofusión, grifería usada o bolsas de cal.",
      formasPago: ["Efectivo o transferencia", "Acepta trueque"],
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      descripcion: "Plomería general. Destape de desagües cloacales y pluviales, reparación de caños rotos, limpieza de tanques de agua e instalación de bombas presurizadoras.",
      testimonio: {
        texto: "“Destapó la cámara y cambió la llave de paso sin romper de más. Muy recomendable.”",
        autor: "Raúl",
        barrio: "Vecino de Ciudad Nueva"
      }
    },
    {
      id: "norma-dominguez",
      nombre: "Norma Domínguez",
      oficio: "Plomería",
      tituloCompleto: "Plomera e Instaladora Sanitaria",
      barrio: "Alberdi",
      barrioTexto: "Barrio Alberdi",
      telefono: "3584667788",
      whatsapp: "5493584667788",
      calificacion: 5.0,
      cantidadOpiniones: 12,
      aceptaTrueque: true,
      urgencias24hs: false,
      horarios: "Lun a Vie de 8:00 a 17:00 hs • Sáb de 8:00 a 12:00 hs",
      detalleTrueque: "Acepto herramientas o artículos de limpieza para el taller.",
      formasPago: ["Efectivo o transferencia", "Acepta trueque"],
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      descripcion: "Reparación de pérdidas en canillas, cambios de cueritos, griferías monocomando, colocación de inodoros, mochilas y desagües de lavarropas.",
      testimonio: {
        texto: "“Excelente trabajo colocando la grifería del baño. Muy puntual y re macanuda.”",
        autor: "Rosa",
        barrio: "Vecina de Alberdi"
      }
    }
  ];

  var CLAVE_STORAGE = "oficios_barriales_trabajadores";
  var memoriaTrabajadores = null;

  // =============================================================================
  // 2. GESTIÓN DEL ALMACENAMIENTO LOCAL CON RESPALDO EN MEMORIA
  // =============================================================================
  function obtenerTrabajadores() {
    try {
      var guardados = localStorage.getItem(CLAVE_STORAGE);
      if (!guardados) {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(TRABAJADORES_SEMILLA));
        memoriaTrabajadores = TRABAJADORES_SEMILLA.slice();
        return memoriaTrabajadores;
      }
      var parseados = JSON.parse(guardados);
      if (Array.isArray(parseados) && parseados.length > 0) {
        for (var p = 0; p < parseados.length; p++) {
          if (parseados[p].urgencias24hs === undefined) {
            parseados[p].urgencias24hs = (parseados[p].id === "carlos-gomez" || parseados[p].id === "roberto-perez");
          }
          if (!parseados[p].horarios) {
            var semillaCoincidente = null;
            for (var s = 0; s < TRABAJADORES_SEMILLA.length; s++) {
              if (TRABAJADORES_SEMILLA[s].id === parseados[p].id) {
                semillaCoincidente = TRABAJADORES_SEMILLA[s];
                break;
              }
            }
            parseados[p].horarios = semillaCoincidente ? semillaCoincidente.horarios : "Lun a Vie de 8:00 a 18:00 hs • Sáb de 9:00 a 13:00 hs";
          }
        }
        memoriaTrabajadores = parseados;
      } else {
        memoriaTrabajadores = TRABAJADORES_SEMILLA.slice();
      }
      return memoriaTrabajadores;
    } catch (e) {
      if (!memoriaTrabajadores) {
        memoriaTrabajadores = TRABAJADORES_SEMILLA.slice();
      }
      return memoriaTrabajadores;
    }
  }

  function guardarTrabajador(nuevoTrabajador) {
    var lista = obtenerTrabajadores();
    lista.unshift(nuevoTrabajador);
    memoriaTrabajadores = lista;
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(lista));
    } catch (e) {
      console.warn("localStorage no disponible, guardado en memoria de sesión:", e);
    }
    return true;
  }

  // =============================================================================
  // 3. NORMALIZACIÓN DE TEXTO Y ACCESIBILIDAD LINGÜÍSTICA (BÚSQUEDA ROBUSTA)
  // =============================================================================
  function normalizarTexto(texto) {
    if (!texto) return "";
    return String(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // =============================================================================
  // 4. ESTADO REACTIVO CENTRAL DE LA APLICACIÓN
  // =============================================================================
  var estado = {
    vistaActual: "landing",
    barrioSeleccionado: "Alberdi",
    oficioSeleccionado: "Gasista",
    filtroActivo: "todos",
    busquedaTexto: "",
    trabajadorActual: null
  };

  // =============================================================================
  // 5. CONTROLADOR DE VISTAS (ENRUTADOR DE LA SPA: LANDING ↔ WEB APP)
  // =============================================================================
  function cambiarVista(nombreVista) {
    var vistaLanding = document.getElementById("vista-landing");
    var contenedorApp = document.getElementById("contenedor-app-spa");

    var vistasApp = {
      inicio: document.getElementById("vista-inicio"),
      listado: document.getElementById("vista-listado"),
      perfil: document.getElementById("vista-perfil"),
      publicar: document.getElementById("vista-publicar")
    };

    if (nombreVista === "landing") {
      estado.vistaActual = "landing";
      if (vistaLanding) {
        vistaLanding.classList.remove("vista-oculta");
        vistaLanding.classList.add("vista-activa");
      }
      if (contenedorApp) {
        contenedorApp.classList.add("vista-oculta");
        contenedorApp.classList.remove("vista-activa");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });

      var avisosLanding = document.getElementById("region-avisos");
      if (avisosLanding) {
        avisosLanding.textContent = "Portada institucional y presentación de Oficios Barriales - Impulso Barrial S.R.L.";
      }
      return;
    }

    if (!vistasApp[nombreVista]) return;

    estado.vistaActual = nombreVista;

    if (vistaLanding) {
      vistaLanding.classList.add("vista-oculta");
      vistaLanding.classList.remove("vista-activa");
    }
    if (contenedorApp) {
      contenedorApp.classList.remove("vista-oculta");
      contenedorApp.classList.add("vista-activa");
    }

    Object.keys(vistasApp).forEach(function (clave) {
      if (clave === nombreVista) {
        vistasApp[clave].classList.remove("vista-oculta");
        vistasApp[clave].classList.add("vista-activa");
      } else {
        vistasApp[clave].classList.add("vista-oculta");
        vistasApp[clave].classList.remove("vista-activa");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    var avisos = document.getElementById("region-avisos");
    if (avisos) {
      var titulos = {
        inicio: "Pantalla principal de Oficios Barriales",
        listado: estado.busquedaTexto.trim()
          ? 'Resultados para "' + estado.busquedaTexto.trim() + '" en ' + estado.barrioSeleccionado
          : "Listado de " + estado.oficioSeleccionado + "s en " + estado.barrioSeleccionado,
        perfil: "Perfil de " + (estado.trabajadorActual ? estado.trabajadorActual.nombre : "profesional"),
        publicar: "Formulario para publicar un oficio"
      };
      avisos.textContent = titulos[nombreVista] || "Sección actualizada";
    }
  }

  // =============================================================================
  // 6. RENDERIZADO DEL LISTADO DE RESULTADOS (VISTA 2)
  // =============================================================================
  function renderizarListado() {
    var todosLosTrabajadores = obtenerTrabajadores();
    var tituloListado = document.getElementById("titulo-listado");
    var subtituloListado = document.getElementById("subtitulo-listado");
    var contenedorTarjetas = document.getElementById("contenedor-tarjetas-trabajadores");

    var pluralOficio = estado.oficioSeleccionado.endsWith("a")
      ? estado.oficioSeleccionado + "s"
      : estado.oficioSeleccionado === "Electricidad"
        ? "Electricistas"
        : estado.oficioSeleccionado + "s";

    var textoBarrio = estado.barrioSeleccionado === "Todos" ? "Río Cuarto" : estado.barrioSeleccionado;

    if (estado.busquedaTexto.trim()) {
      tituloListado.textContent = 'Resultados para "' + estado.busquedaTexto.trim() + '" en ' + textoBarrio;
      subtituloListado.textContent = "Primero, las recomendaciones de tus vecinos.";
    } else {
      tituloListado.textContent = pluralOficio + " en " + textoBarrio;
      subtituloListado.textContent = "Primero, las recomendaciones de tus vecinos.";
    }

    var filtrados = todosLosTrabajadores.filter(function (t) {
      var coincideBarrio =
        estado.barrioSeleccionado === "Todos" ||
        normalizarTexto(t.barrio) === normalizarTexto(estado.barrioSeleccionado);
      var coincideOficio =
        normalizarTexto(t.oficio) === normalizarTexto(estado.oficioSeleccionado);

      if (estado.busquedaTexto.trim()) {
        var termino = normalizarTexto(estado.busquedaTexto.trim());
        var campos = [
          normalizarTexto(t.nombre),
          normalizarTexto(t.oficio),
          normalizarTexto(t.tituloCompleto),
          normalizarTexto(t.descripcion),
          normalizarTexto(t.detalleTrueque)
        ];

        var coincideTexto = false;
        for (var k = 0; k < campos.length; k++) {
          if (campos[k].indexOf(termino) !== -1) {
            coincideTexto = true;
            break;
          }
        }

        // Variantes morfológicas habituales: plurales ("gasistas" -> "gasista") o raíz ("plomeria" / "plomero" / "plomera")
        if (!coincideTexto && termino.length > 3 && termino.endsWith("s")) {
          var singular = termino.slice(0, -1);
          for (var s = 0; s < campos.length; s++) {
            if (campos[s].indexOf(singular) !== -1) {
              coincideTexto = true;
              break;
            }
          }
        }

        if (!coincideTexto && termino.indexOf("plomer") !== -1) {
          for (var p = 0; p < campos.length; p++) {
            if (campos[p].indexOf("plomer") !== -1) {
              coincideTexto = true;
              break;
            }
          }
        }

        return coincideBarrio && coincideTexto;
      }

      return coincideBarrio && coincideOficio;
    });

    if (estado.filtroActivo === "puntaje") {
      filtrados.sort(function (a, b) {
        return b.calificacion - a.calificacion;
      });
    } else if (estado.filtroActivo === "trueque") {
      filtrados = filtrados.filter(function (t) {
        return t.aceptaTrueque;
      });
    } else if (estado.filtroActivo === "urgencias") {
      filtrados = filtrados.filter(function (t) {
        return t.urgencias24hs;
      });
    }

    if (filtrados.length === 0) {
      contenedorTarjetas.innerHTML =
        '<div class="bg-white border-2 border-dashed border-slate-300 rounded-3xl p-6 text-center shadow-sm">' +
        '<div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3" aria-hidden="true">' +
        '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />' +
        '</svg>' +
        '</div>' +
        '<h3 class="text-base font-bold text-slate-900 mb-1">No encontramos trabajadores acá</h3>' +
        '<p class="text-sm text-slate-600 mb-4 leading-relaxed">Todavía no hay profesionales registrados en esta categoría para ' +
        textoBarrio +
        ".</p>" +
        '<button type="button" id="btn-reintentar-filtro" class="hit-target inline-flex items-center text-sm font-bold text-blue-700 hover:underline">Probar con otro barrio u oficio</button>' +
        "</div>";

      var btnReintentar = document.getElementById("btn-reintentar-filtro");
      if (btnReintentar) {
        btnReintentar.addEventListener("click", function () {
          cambiarVista("inicio");
        });
      }
      return;
    }

    contenedorTarjetas.innerHTML = filtrados
      .map(function (trabajador) {
        var insigniasHtml = '<div class="flex flex-wrap gap-1.5 mb-3.5">';
        if (trabajador.urgencias24hs) {
          insigniasHtml +=
            '<div class="inline-flex items-center text-xs font-bold etiqueta-urgencias px-2.5 py-1 rounded-full">' +
            '<span class="mr-1" aria-hidden="true">🚨</span>' +
            "<span>Urgencias 24 hs</span>" +
            "</div>";
        }
        if (trabajador.aceptaTrueque) {
          insigniasHtml +=
            '<div class="inline-flex items-center text-xs font-bold etiqueta-trueque px-2.5 py-1 rounded-full">' +
            '<span class="mr-1" aria-hidden="true">🤝</span>' +
            "<span>Acepta Trueque</span>" +
            "</div>";
        }
        if (!trabajador.urgencias24hs && !trabajador.aceptaTrueque) {
          insigniasHtml += '<div class="h-1 mb-2"></div>';
        }
        insigniasHtml += "</div>";

        return (
          '<article class="tarjeta-interactiva bg-white border-2 border-slate-200 rounded-3xl p-4 shadow-sm flex flex-col justify-between">' +
          "<div>" +
          '<div class="flex items-center text-slate-900 font-extrabold text-base mb-1" aria-label="Puntuación: ' +
          trabajador.calificacion +
          " estrellas de " +
          trabajador.cantidadOpiniones +
          ' vecinos">' +
          '<span class="text-amber-500 mr-1.5 text-lg" aria-hidden="true">★</span>' +
          "<span>" +
          trabajador.calificacion.toFixed(1) +
          " • " +
          trabajador.cantidadOpiniones +
          " vecinos</span>" +
          "</div>" +
          '<h3 class="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">' +
          trabajador.nombre +
          "</h3>" +
          '<p class="text-sm font-medium text-slate-600 mb-2.5">' +
          (trabajador.barrioTexto || "Barrio " + trabajador.barrio) +
          "</p>" +
          insigniasHtml +
          "</div>" +
          '<button type="button" data-trabajador-id="' +
          trabajador.id +
          '" class="btn-abrir-perfil boton-interactivo w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl hit-target text-sm shadow-sm focus-visible:ring-4 focus-visible:ring-blue-500" aria-label="Ver perfil completo y teléfono de ' +
          trabajador.nombre +
          '">' +
          "Ver perfil y teléfono" +
          "</button>" +
          "</article>"
        );
      })
      .join("");

    var botonesPerfil = document.querySelectorAll(".btn-abrir-perfil");
    for (var i = 0; i < botonesPerfil.length; i++) {
      botonesPerfil[i].addEventListener("click", function () {
        var id = this.getAttribute("data-trabajador-id");
        mostrarPerfilPorId(id);
      });
    }
  }

  // =============================================================================
  // 6. RENDERIZADO DEL PERFIL DEL TRABAJADOR (VISTA 3)
  // =============================================================================
  function mostrarPerfilPorId(id) {
    var todos = obtenerTrabajadores();
    var trabajador = null;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        trabajador = todos[i];
        break;
      }
    }
    if (!trabajador) return;

    estado.trabajadorActual = trabajador;

    var fotoEl = document.getElementById("perfil-foto");
    var nombreEl = document.getElementById("perfil-nombre");
    var oficioBarrioEl = document.getElementById("perfil-oficio-barrio");
    var estrellasEl = document.getElementById("perfil-estrellas-vecinos");
    var descripcionEl = document.getElementById("perfil-descripcion");
    var horariosEl = document.getElementById("perfil-horarios");
    var insigniaTruequeEl = document.getElementById("perfil-insignia-trueque");
    var insigniaUrgenciasEl = document.getElementById("perfil-insignia-urgencias");
    var filaTruequeEl = document.getElementById("perfil-fila-trueque");
    var filaUrgenciasEl = document.getElementById("perfil-fila-urgencias");
    var detalleTruequeEl = document.getElementById("perfil-detalle-trueque");
    var testimonioTextoEl = document.getElementById("perfil-testimonio-texto");
    var testimonioAutorEl = document.getElementById("perfil-testimonio-autor");
    var testimonioBarrioEl = document.getElementById("perfil-testimonio-barrio");
    var btnLlamar = document.getElementById("btn-llamar-ahora");
    var btnWhatsapp = document.getElementById("btn-whatsapp-ahora");
    var btnChat = document.getElementById("btn-abrir-chat-perfil");

    fotoEl.src = trabajador.foto || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80";
    fotoEl.alt = "Fotografía de " + trabajador.nombre;

    nombreEl.textContent = trabajador.nombre;
    oficioBarrioEl.textContent = (trabajador.tituloCompleto || trabajador.oficio) + " • " + trabajador.barrio;
    estrellasEl.textContent = trabajador.calificacion.toFixed(1) + " • " + trabajador.cantidadOpiniones + " vecinos";
    descripcionEl.textContent = trabajador.descripcion;

    if (horariosEl) {
      horariosEl.textContent = trabajador.horarios || "Lun a Vie de 8:00 a 18:00 hs • Sáb de 9:00 a 13:00 hs";
    }

    if (insigniaUrgenciasEl) {
      if (trabajador.urgencias24hs) {
        insigniaUrgenciasEl.classList.remove("hidden");
      } else {
        insigniaUrgenciasEl.classList.add("hidden");
      }
    }

    if (filaUrgenciasEl) {
      if (trabajador.urgencias24hs) {
        filaUrgenciasEl.classList.remove("hidden");
      } else {
        filaUrgenciasEl.classList.add("hidden");
      }
    }

    if (trabajador.aceptaTrueque) {
      if (insigniaTruequeEl) insigniaTruequeEl.classList.remove("hidden");
      if (filaTruequeEl) filaTruequeEl.classList.remove("hidden");
      if (detalleTruequeEl) detalleTruequeEl.textContent = trabajador.detalleTrueque || "Acepta trueque por herramientas, materiales o alimentos.";
    } else {
      if (insigniaTruequeEl) insigniaTruequeEl.classList.add("hidden");
      if (filaTruequeEl) filaTruequeEl.classList.add("hidden");
    }

    if (trabajador.testimonio) {
      testimonioTextoEl.textContent = trabajador.testimonio.texto;
      testimonioAutorEl.textContent = trabajador.testimonio.autor;
      testimonioBarrioEl.textContent = trabajador.testimonio.barrio;
    } else {
      testimonioTextoEl.textContent = "“Excelente atención, muy cumplidor y de confianza.”";
      testimonioAutorEl.textContent = "Vecino";
      testimonioBarrioEl.textContent = "Río Cuarto";
    }

    btnLlamar.href = "tel:" + trabajador.telefono;
    btnLlamar.setAttribute("aria-label", "Llamar por teléfono ahora a " + trabajador.nombre);
    btnLlamar.onclick = function (e) {
      e.preventDefault();
      abrirModalLlamada(trabajador);
    };

    var mensajeWa = encodeURIComponent("Hola " + trabajador.nombre + ", te encontré en Oficios Barriales y quería consultarte por un trabajo.");
    btnWhatsapp.href = "https://wa.me/" + trabajador.whatsapp + "?text=" + mensajeWa;
    btnWhatsapp.setAttribute("aria-label", "Mandar mensaje por WhatsApp a " + trabajador.nombre);

    if (btnChat) {
      btnChat.setAttribute("aria-label", "Enviar consulta por chat interno a " + trabajador.nombre);
      btnChat.onclick = function () {
        abrirModalChat(trabajador);
      };
    }

    cambiarVista("perfil");
  }

  // =============================================================================
  // 7. MODAL DE CONFIRMACIÓN DE LLAMADA TELEFÓNICA
  // =============================================================================
  var modalLlamada = document.getElementById("modal-confirmar-llamada");
  var textoModalLlamada = document.getElementById("texto-modal-llamada");
  var numeroModalLlamada = document.getElementById("numero-modal-llamada");
  var enlaceDirectoLlamada = document.getElementById("enlace-directo-llamada");
  var btnCancelarLlamada = document.getElementById("btn-cancelar-llamada");

  function abrirModalLlamada(trabajador) {
    numeroModalLlamada.textContent = trabajador.telefono;
    textoModalLlamada.innerHTML =
      "¿Querés llamar por teléfono a <strong>" +
      trabajador.nombre +
      '</strong> al número <strong class="text-blue-700">' +
      trabajador.telefono +
      "</strong>?";
    enlaceDirectoLlamada.href = "tel:" + trabajador.telefono;
    modalLlamada.classList.remove("hidden");
    enlaceDirectoLlamada.focus();
  }

  if (btnCancelarLlamada) {
    btnCancelarLlamada.addEventListener("click", function () {
      modalLlamada.classList.add("hidden");
    });
  }

  if (modalLlamada) {
    modalLlamada.addEventListener("click", function (e) {
      if (e.target === modalLlamada) {
        modalLlamada.classList.add("hidden");
      }
    });
  }

  // =============================================================================
  // 8. MODAL DE CHAT VECINAL INTEGRADO CON PERSISTENCIA Y RESPUESTA SIMULADA
  // =============================================================================
  var modalChat = document.getElementById("modal-chat-vecinal");
  var backdropChat = document.getElementById("backdrop-modal-chat");
  var btnCerrarChat = document.getElementById("btn-cerrar-chat");
  var fotoChat = document.getElementById("chat-trabajador-foto");
  var tituloChat = document.getElementById("titulo-modal-chat");
  var subtituloChat = document.getElementById("subtitulo-modal-chat");
  var contenedorMensajesChat = document.getElementById("contenedor-mensajes-chat");
  var formEnviarChat = document.getElementById("form-enviar-chat");
  var campoTextoChat = document.getElementById("campo-texto-chat");
  var indicadorEscribiendo = document.getElementById("indicador-escribiendo");
  var textoEscribiendo = document.getElementById("texto-escribiendo");
  var trabajadorChatActual = null;

  function obtenerClaveChat(trabajadorId) {
    return "oficios_barriales_chat_" + trabajadorId;
  }

  function obtenerHistorialChat(trabajadorId) {
    try {
      var guardados = localStorage.getItem(obtenerClaveChat(trabajadorId));
      if (!guardados) return [];
      var parseados = JSON.parse(guardados);
      return Array.isArray(parseados) ? parseados : [];
    } catch (e) {
      return [];
    }
  }

  function guardarHistorialChat(trabajadorId, mensajes) {
    try {
      localStorage.setItem(obtenerClaveChat(trabajadorId), JSON.stringify(mensajes));
    } catch (e) {
      console.warn("No se pudo guardar el chat en localStorage:", e);
    }
  }

  function escapeHtml(texto) {
    var div = document.createElement("div");
    div.textContent = texto || "";
    return div.innerHTML;
  }

  function renderizarMensajesChat(trabajadorId) {
    var mensajes = obtenerHistorialChat(trabajadorId);
    if (!contenedorMensajesChat) return;

    var html =
      '<div class="text-center my-1">' +
      '<span class="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full">' +
      '💬 Chat vecinal directo • Sin intermediarios' +
      '</span>' +
      '</div>';

    if (mensajes.length === 0) {
      html +=
        '<div class="p-4 bg-white border border-slate-200 rounded-2xl text-center text-slate-500 text-sm mt-3">' +
        'Todavía no le enviaste consultas a este trabajador. Podés elegir un mensaje rápido o escribir tu consulta abajo.' +
        '</div>';
    } else {
      for (var i = 0; i < mensajes.length; i++) {
        var m = mensajes[i];
        if (m.remitente === "vecino") {
          html +=
            '<div class="flex justify-end mb-2">' +
            '<div class="bg-blue-700 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-sm">' +
            '<p class="text-sm font-medium leading-relaxed">' + escapeHtml(m.texto) + '</p>' +
            '<span class="block text-[11px] text-blue-200 text-right mt-1">' + (m.hora || "") + '</span>' +
            '</div>' +
            '</div>';
        } else {
          html +=
            '<div class="flex justify-start mb-2">' +
            '<div class="bg-white border-2 border-slate-200 text-slate-900 p-3 rounded-2xl rounded-tl-xs max-w-[85%] shadow-sm">' +
            '<p class="text-sm font-medium leading-relaxed">' + escapeHtml(m.texto) + '</p>' +
            '<span class="block text-[11px] text-slate-500 text-left mt-1">' + (m.hora || "") + '</span>' +
            '</div>' +
            '</div>';
        }
      }
    }

    contenedorMensajesChat.innerHTML = html;
    contenedorMensajesChat.scrollTop = contenedorMensajesChat.scrollHeight;
  }

  function abrirModalChat(trabajador) {
    trabajadorChatActual = trabajador;
    if (fotoChat) {
      fotoChat.src = trabajador.foto || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80";
      fotoChat.alt = "Foto de " + trabajador.nombre;
    }
    if (tituloChat) {
      tituloChat.textContent = "Chat con " + trabajador.nombre;
    }
    if (subtituloChat) {
      subtituloChat.textContent = (trabajador.tituloCompleto || trabajador.oficio) + " • Barrio " + trabajador.barrio;
    }
    if (textoEscribiendo) {
      textoEscribiendo.textContent = trabajador.nombre + " está escribiendo...";
    }

    renderizarMensajesChat(trabajador.id);

    if (modalChat) {
      modalChat.classList.remove("hidden");
    }
    if (campoTextoChat) {
      campoTextoChat.focus();
    }
  }

  function cerrarModalChat() {
    if (modalChat) {
      modalChat.classList.add("hidden");
    }
    if (indicadorEscribiendo) {
      indicadorEscribiendo.classList.add("hidden");
    }
    trabajadorChatActual = null;
  }

  function enviarMensajeChat(texto) {
    if (!trabajadorChatActual || !texto || !texto.trim()) return;
    var textoLimpio = texto.trim();
    var trabajador = trabajadorChatActual;

    var ahora = new Date();
    var horaStr = String(ahora.getHours()).padStart(2, "0") + ":" + String(ahora.getMinutes()).padStart(2, "0");

    var historial = obtenerHistorialChat(trabajador.id);
    historial.push({
      remitente: "vecino",
      texto: textoLimpio,
      hora: horaStr
    });
    guardarHistorialChat(trabajador.id, historial);
    renderizarMensajesChat(trabajador.id);

    if (campoTextoChat) {
      campoTextoChat.value = "";
    }

    if (indicadorEscribiendo) {
      indicadorEscribiendo.classList.remove("hidden");
    }
    if (contenedorMensajesChat) {
      contenedorMensajesChat.scrollTop = contenedorMensajesChat.scrollHeight;
    }

    setTimeout(function () {
      if (indicadorEscribiendo) {
        indicadorEscribiendo.classList.add("hidden");
      }

      var respuestaTexto = "¡Hola! Gracias por comunicarte. Recibí tu consulta sobre " + (trabajador.oficio ? trabajador.oficio.toLowerCase() : "el trabajo") + ". Te respondo en breve o podés llamarme al " + trabajador.telefono + " si lo necesitás urgente.";

      var norm = normalizarTexto(textoLimpio);
      if (norm.indexOf("trueque") !== -1 && trabajador.aceptaTrueque) {
        respuestaTexto = "¡Hola! Sí, acepto trueque vecinal en " + trabajador.barrio + ". " + (trabajador.detalleTrueque ? trabajador.detalleTrueque : "Podemos coordinar para ver qué nos sirve a ambos.");
      } else if (norm.indexOf("disponibilidad") !== -1) {
        respuestaTexto = "¡Hola! Sí, tengo disponibilidad hoy para pasar a revisar. ¿En qué zona de " + trabajador.barrio + " estás?";
      } else if (norm.indexOf("presupuesto") !== -1) {
        respuestaTexto = "¡Hola! Te puedo pasar un presupuesto sin cargo. Contame un poco más qué problema tenés.";
      }

      var ahoraRespuesta = new Date();
      var horaRespuestaStr = String(ahoraRespuesta.getHours()).padStart(2, "0") + ":" + String(ahoraRespuesta.getMinutes()).padStart(2, "0");

      var historialActualizado = obtenerHistorialChat(trabajador.id);
      historialActualizado.push({
        remitente: "trabajador",
        texto: respuestaTexto,
        hora: horaRespuestaStr
      });
      guardarHistorialChat(trabajador.id, historialActualizado);

      if (trabajadorChatActual && trabajadorChatActual.id === trabajador.id) {
        renderizarMensajesChat(trabajador.id);
      }

      var avisos = document.getElementById("region-avisos");
      if (avisos) {
        avisos.textContent = "Nuevo mensaje recibido de " + trabajador.nombre + " en el chat.";
      }
    }, 700);
  }

  // =============================================================================
  // 9. EVENTOS DE NAVEGACIÓN Y FILTROS
  // =============================================================================
  function actualizarEstiloBotonesFiltro(filtroActivo) {
    var btnTodos = document.getElementById("filtro-todos");
    var btnPuntaje = document.getElementById("filtro-puntaje");
    var btnTrueque = document.getElementById("filtro-trueque");
    var btnUrgencias = document.getElementById("filtro-urgencias");

    var botones = [btnTodos, btnPuntaje, btnTrueque, btnUrgencias];
    for (var i = 0; i < botones.length; i++) {
      if (!botones[i]) continue;
      botones[i].classList.remove(
        "bg-slate-900", "text-white", "border-slate-900",
        "bg-emerald-700", "border-emerald-700",
        "bg-red-700", "border-red-700"
      );
      botones[i].classList.add("bg-white", "text-slate-800", "border-slate-300");
      botones[i].setAttribute("aria-pressed", "false");
    }

    if (filtroActivo === "todos" && btnTodos) {
      btnTodos.classList.remove("bg-white", "text-slate-800", "border-slate-300");
      btnTodos.classList.add("bg-slate-900", "text-white", "border-slate-900");
      btnTodos.setAttribute("aria-pressed", "true");
    } else if (filtroActivo === "puntaje" && btnPuntaje) {
      btnPuntaje.classList.remove("bg-white", "text-slate-800", "border-slate-300");
      btnPuntaje.classList.add("bg-slate-900", "text-white", "border-slate-900");
      btnPuntaje.setAttribute("aria-pressed", "true");
    } else if (filtroActivo === "trueque" && btnTrueque) {
      btnTrueque.classList.remove("bg-white", "text-slate-800", "border-slate-300");
      btnTrueque.classList.add("bg-emerald-700", "text-white", "border-emerald-700");
      btnTrueque.setAttribute("aria-pressed", "true");
    } else if (filtroActivo === "urgencias" && btnUrgencias) {
      btnUrgencias.classList.remove("bg-white", "text-slate-800", "border-slate-300");
      btnUrgencias.classList.add("bg-red-700", "text-white", "border-red-700");
      btnUrgencias.setAttribute("aria-pressed", "true");
    }
  }

  function inicializarEventos() {
    // Navegación entre Landing Page institucional y Web App operativa
    var botonesIrLanding = document.querySelectorAll(".btn-ir-landing");
    for (var l = 0; l < botonesIrLanding.length; l++) {
      botonesIrLanding[l].addEventListener("click", function (e) {
        e.preventDefault();
        cambiarVista("landing");
      });
    }

    var botonesIrAppInicio = document.querySelectorAll(".btn-ir-app-inicio");
    for (var a = 0; a < botonesIrAppInicio.length; a++) {
      botonesIrAppInicio[a].addEventListener("click", function (e) {
        e.preventDefault();
        cambiarVista("inicio");
      });
    }

    var botonesIrAppPublicar = document.querySelectorAll(".btn-ir-app-publicar");
    for (var u = 0; u < botonesIrAppPublicar.length; u++) {
      botonesIrAppPublicar[u].addEventListener("click", function (e) {
        e.preventDefault();
        cambiarVista("publicar");
      });
    }

    var selectorBarrioInicio = document.getElementById("selector-barrio-inicio");
    if (selectorBarrioInicio) {
      selectorBarrioInicio.addEventListener("change", function (e) {
        estado.barrioSeleccionado = e.target.value;
      });
    }

    var campoBusquedaRapida = document.getElementById("campo-busqueda-rapida");
    var formBusquedaRapida = document.getElementById("formulario-busqueda-rapida");

    function ejecutarBusquedaRapida() {
      estado.filtroActivo = "todos";
      actualizarEstiloBotonesFiltro("todos");
      renderizarListado();
      cambiarVista("listado");
    }

    if (campoBusquedaRapida) {
      campoBusquedaRapida.addEventListener("input", function (e) {
        estado.busquedaTexto = e.target.value;
      });

      campoBusquedaRapida.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          ejecutarBusquedaRapida();
        }
      });
    }

    if (formBusquedaRapida) {
      formBusquedaRapida.addEventListener("submit", function (e) {
        e.preventDefault();
        ejecutarBusquedaRapida();
      });
    }

    var botonesOficio = document.querySelectorAll(".boton-oficio");
    for (var i = 0; i < botonesOficio.length; i++) {
      botonesOficio[i].addEventListener("click", function () {
        var oficio = this.getAttribute("data-oficio");
        estado.oficioSeleccionado = oficio;
        estado.busquedaTexto = "";
        if (campoBusquedaRapida) {
          campoBusquedaRapida.value = "";
        }
        estado.filtroActivo = "todos";
        actualizarEstiloBotonesFiltro("todos");
        renderizarListado();
        cambiarVista("listado");
      });
    }

    var btnIrPublicar = document.getElementById("btn-ir-publicar");
    if (btnIrPublicar) {
      btnIrPublicar.addEventListener("click", function () {
        cambiarVista("publicar");
      });
    }

    var btnVolverInicio = document.getElementById("btn-volver-inicio");
    if (btnVolverInicio) {
      btnVolverInicio.addEventListener("click", function () {
        cambiarVista("inicio");
      });
    }

    var btnVolverListado = document.getElementById("btn-volver-listado");
    if (btnVolverListado) {
      btnVolverListado.addEventListener("click", function () {
        cambiarVista("listado");
      });
    }

    var btnVolverInicioDesdePublicar = document.getElementById("btn-volver-inicio-desde-publicar");
    if (btnVolverInicioDesdePublicar) {
      btnVolverInicioDesdePublicar.addEventListener("click", function () {
        cambiarVista("inicio");
      });
    }

    var botonesFiltro = document.querySelectorAll(".boton-filtro");
    for (var j = 0; j < botonesFiltro.length; j++) {
      botonesFiltro[j].addEventListener("click", function () {
        var filtro = this.getAttribute("data-filtro");
        estado.filtroActivo = filtro;
        actualizarEstiloBotonesFiltro(filtro);
        renderizarListado();
      });
    }

    // Eventos del Chat Vecinal
    if (btnCerrarChat) {
      btnCerrarChat.addEventListener("click", cerrarModalChat);
    }
    if (backdropChat) {
      backdropChat.addEventListener("click", cerrarModalChat);
    }

    if (formEnviarChat) {
      formEnviarChat.addEventListener("submit", function (e) {
        e.preventDefault();
        if (campoTextoChat) {
          enviarMensajeChat(campoTextoChat.value);
        }
      });
    }

    var botonesRapidos = document.querySelectorAll(".boton-mensaje-rapido");
    for (var r = 0; r < botonesRapidos.length; r++) {
      botonesRapidos[r].addEventListener("click", function () {
        var msg = this.getAttribute("data-mensaje");
        if (msg) {
          enviarMensajeChat(msg);
        }
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalChat && !modalChat.classList.contains("hidden")) {
        cerrarModalChat();
      }
    });

    // Formulario Publicar
    var formPublicar = document.getElementById("formulario-publicar-oficio");
    var casillaTrueque = document.getElementById("campo-acepta-trueque");
    var cajaDetalleTrueque = document.getElementById("caja-detalle-trueque");
    var casillaUrgencias = document.getElementById("campo-urgencias");
    var alertaFormulario = document.getElementById("alerta-formulario");

    if (casillaTrueque && cajaDetalleTrueque) {
      casillaTrueque.addEventListener("change", function (e) {
        if (e.target.checked) {
          cajaDetalleTrueque.classList.remove("hidden");
        } else {
          cajaDetalleTrueque.classList.add("hidden");
        }
      });
    }

    if (formPublicar) {
      formPublicar.addEventListener("submit", function (e) {
        e.preventDefault();

        var nombre = document.getElementById("campo-nombre").value.trim();
        var oficio = document.getElementById("campo-oficio").value;
        var barrio = document.getElementById("campo-barrio").value;
        var telefono = document.getElementById("campo-telefono").value.trim();
        var campoHorariosEl = document.getElementById("campo-horarios");
        var horarios = campoHorariosEl ? campoHorariosEl.value.trim() : "";
        var aceptaTrueque = casillaTrueque ? casillaTrueque.checked : false;
        var atiendeUrgencias = casillaUrgencias ? casillaUrgencias.checked : false;
        var detalleTrueque = document.getElementById("campo-detalle-trueque").value.trim();
        var descripcion = document.getElementById("campo-descripcion").value.trim();

        if (!nombre || !oficio || !barrio || !telefono) {
          if (alertaFormulario) {
            alertaFormulario.className = "mb-4 p-4 rounded-2xl border text-sm bg-red-50 border-red-400 text-red-900";
            alertaFormulario.textContent = "Por favor completá los campos obligatorios marcados con asterisco (*).";
            alertaFormulario.classList.remove("hidden");
          }
          return;
        }

        var btnGuardar = document.getElementById("btn-guardar-oficio");
        if (btnGuardar) {
          btnGuardar.disabled = true;
          btnGuardar.textContent = "Guardando oficio...";
        }

        var idNuevo = "trabajador-" + Date.now();
        var nuevoTrabajador = {
          id: idNuevo,
          nombre: nombre,
          oficio: oficio,
          tituloCompleto: oficio + " en " + barrio,
          barrio: barrio,
          barrioTexto: "Barrio " + barrio,
          telefono: telefono,
          whatsapp: "549" + telefono.replace(/\D/g, ""),
          horarios: horarios || "Lun a Vie de 8:00 a 18:00 hs • Sáb de 9:00 a 13:00 hs",
          calificacion: 5.0,
          cantidadOpiniones: 1,
          aceptaTrueque: aceptaTrueque,
          urgencias24hs: atiendeUrgencias,
          detalleTrueque: detalleTrueque || (aceptaTrueque ? "Acepta herramientas o mercadería a convenir." : ""),
          formasPago: aceptaTrueque ? ["Efectivo o transferencia", "Acepta trueque"] : ["Efectivo o transferencia"],
          foto: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80",
          descripcion: descripcion || "Trabajador independiente de " + oficio + " en " + barrio + ". Consultas y presupuestos sin cargo en la zona.",
          testimonio: {
            texto: "“Se sumó recientemente a la red comunitaria de Río Cuarto.”",
            autor: "Comunidad Vecinal",
            barrio: "Barrio " + barrio
          }
        };

        setTimeout(function () {
          guardarTrabajador(nuevoTrabajador);

          if (btnGuardar) {
            btnGuardar.disabled = false;
            btnGuardar.textContent = "Publicar mi oficio ahora";
          }
          formPublicar.reset();
          if (campoHorariosEl) campoHorariosEl.value = "";
          if (casillaTrueque) casillaTrueque.checked = true;
          if (cajaDetalleTrueque) cajaDetalleTrueque.classList.remove("hidden");
          if (casillaUrgencias) casillaUrgencias.checked = false;

          estado.barrioSeleccionado = barrio;
          estado.oficioSeleccionado = oficio;
          if (selectorBarrioInicio) selectorBarrioInicio.value = barrio;

          mostrarPerfilPorId(idNuevo);
        }, 300);
      });
    }
  }

  // =============================================================================
  // 9. ARRANQUE SEGURO
  // =============================================================================
  function arrancar() {
    obtenerTrabajadores();
    inicializarEventos();
    cambiarVista("landing");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();
