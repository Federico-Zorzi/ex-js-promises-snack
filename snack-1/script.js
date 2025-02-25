// # SNACK 1
/* 
Ottieni il titolo di un post con una Promise.
Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, 
recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
*/

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
}

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => {
        /* console.log("Post: ", post); */

        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((res) => res.json())
          .then((author) => {
            /* console.log("Author: ", author); */

            resolve({ post, author });
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

/* Obtain single post */
getPostTitle(1)
  .then((obj) => console.log("obj1", obj))
  .catch((error) => console.error(error));

/* Obtain post + author */
getPost(1)
  .then((obj) => console.log("post1", obj))
  .catch((error) => console.error(error));
