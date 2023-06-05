let urlBase = 'https://fakestoreapi.com/products'







function showFetch(){
fetch(`${urlBase}`)
.then(data=>data.json())
.then(data=>AllProductos(data))
}

showFetch();




function AllProductos(data){
    

const imagen = document.getElementById("imagen")
const titulo = document.getElementById("titulo")
const descripcion = document.getElementById("descripcion")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")

const imagen1 = document.getElementById("imagen1")
const titulo1 = document.getElementById("titulo1")
const descripcion1 = document.getElementById("descripcion1")
const precio1 = document.getElementById("precio1")
const categoria1 = document.getElementById("categoria1")

imagen.src = data[0].image
const ShowTitulo = data[0].title
const Showimagen = data[0].image
const ShowDescripcion = data[0].description
const  Showprecio= data[0].price
const ShowCategoria = data[0].category


imagen1.src = data[1].image
const ShowTitulo1 = data[1].title
const Showimagen1 = data[1].image
const ShowDescripcion1 = data[1].description
const  Showprecio1= data[1].price
const ShowCategoria1 = data[1].category




titulo.innerHTML = ShowTitulo;
descripcion.innerHTML = ShowDescripcion;
imagen.innerHTML = Showimagen;
precio.innerHTML = `$ ${Showprecio}`;
categoria.innerHTML = ShowCategoria;




titulo1.innerHTML = ShowTitulo1;
descripcion1.innerHTML = ShowDescripcion1;
imagen1.innerHTML = Showimagen1;
precio1.innerHTML = `$ ${Showprecio1}`;
categoria1.innerHTML = ShowCategoria1;



}

function showFetch1(){
    fetch(`${urlBase}`)
    .then(data=>data.json())
    .then(data=>AllProductos1(data))
    }
    
    showFetch1();

    function AllProductos1(data) {
        console.log(data)
        const tarjetasList = data.map(d =>{
           console.log(d.title)
           const div = document.getElementById("card1")
           const h2 = document.createElement('h2')
           const pri = document.createElement('p')
           h2.textContent = d.title
        pri.textContent = d.price
       div.appendChild(h2)
       div.appendChild(pri) 

        })
        tarjetasList;
     
    }