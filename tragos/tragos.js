let urlBase = "https://fakestoreapi.com/products"
let urlRamdom = "/random.php"

let urlName = `search.php?s=margarita`

document.getElementById("btnTrago").addEventListener("click", ()=>{
showDrink()
})

function showDrink () {
    fetch(`https://fakestoreapi.com/products`)
    .then(data=>data.json())
    .then(data=> console.log(data))
}

