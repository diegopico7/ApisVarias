let apiKey = `9e7461c0aa194090196d9113681ca64f`
let diferenciaKelvin = 273;

let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`

let urlBAse = `https://api.openweathermap.org/data/2.5/weather`



document.getElementById("botonBusqueda").addEventListener("click", ()=>{
    const ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})



function fetchDatosClima(ciudad){
    fetch(`${urlBAse}?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    console.log(data)
const datosClima = document.getElementById("datosClima")
datosClima.innerHTML = ""
const ciudadNombre = data.name;
const temperatura = data.main.temp
const descripcion = data.weather[0].description
const humedad = data.main.humidity

let dif = temperatura-diferenciaKelvin
console.log(dif)


const ciudadTitulo = document.createElement('h2')
ciudadTitulo.textContent = ciudadNombre;
const temperaturaInfo = document.createElement("h4")
temperaturaInfo.textContent =  `La temperatura es ${Math.floor(dif)}°`
const descripcionInfo = document.createElement("p")
descripcionInfo.textContent= `El tiempo esta ${descripcion}`
const humedadInfo = document.createElement("p")
humedadInfo.textContent=`la humedad es de ${humedad}%`

datosClima.appendChild(ciudadTitulo);
datosClima.appendChild(temperaturaInfo);
datosClima.appendChild(descripcionInfo);
datosClima.appendChild(humedadInfo);

}

