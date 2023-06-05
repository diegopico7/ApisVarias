// import { usuarios } from "./data";


let url = "https://jsonplaceholder.typicode.com/";
let queryUsers = "users"
let queryPosts = "posts"


//get conseguir informacion

fetch(`${url}${queryUsers}`)
      .then(response => response.json())
      .then(json => console.log(json))




      fetch(`${url}${queryPosts}`)
      .then(response =>response.json())
      .then(json => console.log(json))

      //put editar informacion
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'Cambiando con put',
          body: 'El put edita la informacion',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      //post enviar informacion


let requestBody = { title: 'Nuevo comentario de ....',
body: 'Muy buen comentario de...',
userId: 1,}

      fetch(`${url}${queryPosts}`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    
      //path editar una parte de la informacion
    //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //       title: 'Hi',
    //       body:"World"
          
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));


  //delete borrar informacion
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//   });
