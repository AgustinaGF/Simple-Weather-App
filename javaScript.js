async function clima() {
    let wheater = await fetch("https://ws.smn.gob.ar/map_items/weather")
    let traerClima = await wheater.json()
    return traerClima
}
clima().then(res => {
    setInterval(() => {
        console.log(res)
        var traer = ""
        var otra = ""
        var index = Math.floor(Math.random() * 217) + 1
        let element = res[index]
        traer += `<div class="encabezado">
      <h1>${element.name}</h1>
      <h2>${element.province}</h2>
      <p>${element.forecast.date_time}</p>
  </div>`
        otra += `<div class="contenedor">
   <div class="clima">
       <h2>${element.weather.description}</h2>
       <i class="fas fa-sun"></i>
   </div>
   <h3>${element.weather.tempDesc}</h3>
   <div>
       <p class="winter">  Viento ${element.weather.wing_deg}</p>
   </div>
</div>`
        var contenedor = document.querySelector(".contenedor")
        contenedor.innerHTML = otra;
        var contenedorClima = document.querySelector(".encabezado")
        contenedorClima.innerHTML = traer;

        let descripcion = element.weather.description
        if (descripcion.includes("despejado")) {
            let fondo = document.getElementsByClassName(".contenedor-todo")
            fondo.innerHTML.style.background = black
            negrita.innerHTML = negrita.innerHTML.toLocaleUpperCase()


        }
    }, 2000)
})