let urlBase = "https://pokeapi.co/api/v2/"
let dito = "pokemon/ditto"
let urlName = "https://pokeapi.co/api/v2/pokemon-species/132/"
let AllPokes = "pokemon?limit=100000&offset=0"

document.getElementById("mostrarPoke").addEventListener("click", ()=>{
   mostrarPoke()
})

function mostrarPoke() {
    fetch(`${urlBase}${dito}`)
    .then(data => data.json())
    .then(data => datosPoke(data))
    
}



function datosPoke(data) {
    console.log(data)
    const nombre = data.species.name;
    const url = data.species.url;
const statsB = data.stats[0].base_stat
const statsE = data.stats[0].effort

    
   const nombrePoke = document.getElementById("pokeName")
   const urlPoke = document.getElementById("urlPoke")
   const statsBase = document.getElementById("statsBase")
   const statsEffort = document.getElementById("statsEffort")


   nombrePoke.textContent = `El nombre del poke es ${nombre}`;
urlPoke.setAttribute("href", url);
statsBase.innerHTML = statsB;
statsEffort.innerHTML = statsE;

}



document.getElementById("btnIngreso").addEventListener("click", ()=>{
    showAllPoke();
})


function showAllPoke () {
    fetch(`${urlBase}${AllPokes}`)
    .then(response => response.json())
    .then(response => GetAllPoke(response))
}

function GetAllPoke (response) {
    console.log(response)
    
    ingresoManual();
    
    const nombre1 = response.results[0].name
    const nombrePoke = document.getElementById("nombrePoke");
    


    console.log(nombre1)
    


}

function ingresoManual() {
    const ingresoPoke = document.getElementById("ingresoPoke").value
    console.log(ingresoPoke)
}
