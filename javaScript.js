// constantes
const BACKGROUND = document.querySelector(".contenedor-todo")
const CONTENEDOR = document.querySelector(".contenedor")
const CONTENEDOR_CLIMA = document.querySelector(".encabezado")
const HOUR = new Date()

// fetch de la Api del clima
async function clima() {
    let wheater = await fetch("https://ws.smn.gob.ar/map_items/weather")
    let traerClima = await wheater.json()
    return traerClima
}
clima().then(res => {
        console.log(res)
        setInterval(() => {
            var index = Math.floor(Math.random() * 217) + 1
            let element = res[index]
            contenidoHTML(element)
        }, 2000)
    })
    // funcion que le pasa contenido dinamico al HTML
function contenidoHTML(element) {
    var elementos = "";
    var elementosTemperatura = "";
    let descripcion = element.weather.description
    let nombreLocalidad = element.name
    let provincia = element.province
    let temperatura = element.weather.tempDesc
    let vientos = element.weather.wing_deg
    cambiarFondo(descripcion)
    elementos +=
        `<h1>${nombreLocalidad}</h1>
  <h2>${provincia}</h2>
  <p>${HOUR}</p>
</div>`

    elementosTemperatura +=
        `<div class="clima">
   <h2>${descripcion}</h2>
   <i class="fas fa-sun"></i>
</div>
<h3>${temperatura}</h3>
<div>
   <p class="winter">  Viento ${vientos}</p>
</div>
</div>`

    CONTENEDOR_CLIMA.innerHTML = elementos;
    CONTENEDOR.innerHTML = elementosTemperatura
}

// funcion que cambia el fondo y los iconos de la temperatura segun la descripcion del clima
function cambiarFondo(descripcion) {
    if (descripcion.includes("Despejado")) {
        console.log(descripcion)
        BACKGROUND.classList.remove("nublado")
        BACKGROUND.classList.remove("soleado")
        BACKGROUND.classList.remove("tormenta")
        BACKGROUND.classList.add("despejado")
    } else if (descripcion.includes("nublado")) {
        BACKGROUND.classList.remove("despejado")
        BACKGROUND.classList.remove("soleado")
        BACKGROUND.classList.remove("tormenta")
        BACKGROUND.classList.add("nublado")
    } else if (descripcion.includes("soleado")) {
        BACKGROUND.classList.remove("nublado")
        BACKGROUND.classList.remove("despejado")
        BACKGROUND.classList.remove("tormenta")
        BACKGROUND.classList.add("soleado")
    } else if (descripcion.includes("lluvia")) {
        BACKGROUND.classList.remove("nublado")
        BACKGROUND.classList.remove("despejado")
        BACKGROUND.classList.remove("soleado")
        BACKGROUND.classList.add("tormenta")
    }
}