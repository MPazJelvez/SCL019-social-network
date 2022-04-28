import { logOut, auth} from '../lib/index.js';
import { createPost, onGetPost, getPost, deletePost, editPost, likePost } from '../lib/firestore.js'

export const feed = () => {
  window.location.hash = '/feed';
  const divFeed = document.createElement('div');
  let id = '';

  divFeed.className = 'div';
  divFeed.innerHTML = ` 
  <div class="featured-container">
    <div class="featured">
    <h1 class ="destacados"> Destacados </h1>
  <a href="https://www.instagram.com/blondieamigurumis/
  "><img src="assets/image/blondieamigurumis.jpeg" class="featured-img"/></a>
  <a href="https://www.instagram.com/p.ink.u/
  "><img src="assets/image/Gaby.png" class="featured-img"/> </a>
  <a href="https://www.instagram.com/guatitademanzana/
  "><img src="assets/image/guatita-manzana.png" class="featured-img"/></a>
  <a href="https://www.instagram.com/galeriadigiuli/
  "><img src="assets/image/Guili.jpg" class="featured-img"/></a>
  <a href="https://www.instagram.com/pickleisis/
  "><img src="assets/image/Pandora.jpeg" class="featured-img"/></a>
  <a href="https://www.instagram.com/tallerquemonono/
  "><img src="assets/image/tallerquemonono.jpg" class="featured-img"/></a>
  </div>
  </div>
      <h1 class ="login-title"> Feed </h1>
      <div class='logOut-container'>
        <a href="" id="logOut" class="logOut"> Salir 
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M8.514 20h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2h-4v12h4v2Z"/><path d="m13.842 17.385l1.42-1.408l-3.92-3.953h9.144a1 1 0 1 0 0-2h-9.162l3.98-3.947l-1.408-1.42l-6.391 6.337l6.337 6.391Z"/></g></svg>
        </a>
      </div>
      <div class='post-open-container'>
      <button class='btn post-open' id='post-open' type='button'> ¿Quieres postear? </button>
      </div>
      <div class='form-container hidden' id="form-container">
        <form class='post-form ' id='post-form'>
          <label for='title'> Titulo </label>
          <input type='text' id='title'>
          <label for='description'> Escribir Post </label>
          <textarea name='description' id="description" cols="0" rows="3"></textarea>
          <label for='price'> Precio </label>
          <input id="price" type="number"/>
          <label for='materials'> Materiales </label>
          <input id="materials" type="text"/>
          <button class='btn' id='post-btn'>Postear</button>
          </form>
        </div>
        <div class='post-container' id='post-container'></div>
        `;
  const postContainer = divFeed.querySelector('#post-container');
  const postForm = divFeed.querySelector('#post-form');
  let editStatus = false;
      
  divFeed.querySelector('#post-open').addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('alo')
    divFeed.querySelector('#form-container').classList.toggle("hidden");
  })
  divFeed.querySelector('#logOut').addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

    if (divFeed != '') {
      
      onGetPost((post) => {
        postContainer.innerHTML ='';
        let postStructure = '';
        post.forEach(doc => {
          const posts = doc.data();

          // console.log(posts)
          
          postStructure += `
          <div class="post-border">
            <div class='post'>
            <span class="date">${posts.date}</span><br>
            <p class="user-container">
              
            <i class="user-name">${posts.userName}</i> dijo: </p>
            <h3>${posts.title}</h3>
            <p>${posts.description}</p>
            <div>
            <div class='info-container'>
            <p class='info'><b>Precio:</b> ${posts.price} clp</p>
            <p class='info'><b>Material:</b> ${posts.materials}</p>
            </div>
            <button class='btn-delete btn' data-id='${doc.id}'>Delete</button>
            <button class='btn-edit btn' data-id='${doc.id}'>Edit</button>       
            </div>
            </div>
            <div class="likes-border"> 
              <button  class="btn-like" value=${doc.id}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926L7.814 12.74a2.745 2.745 0 0 1 0-3.907a2.745 2.745 0 0 1 3.906 0l.28.279l.279-.279a2.745 2.745 0 0 1 3.906 0a2.745 2.745 0 0 1 .001 3.907z"/></svg> 
            </button>
            <span id="like-count" class="like-count"> ${posts.numberLike}Me gusta</span> 
            </div>
            </div>
          `
        }); 
        
        postContainer.innerHTML = postStructure;
        // console.log(postContainer.innerHTML = postStructure);
        
        
        
        const btnDelete = postContainer.querySelectorAll('.btn-delete');
        console.log(btnDelete);
        btnDelete.forEach(btn => {
          btn.addEventListener('click',  (e) => {
            
            //console.log(btn)
            id = e.target.dataset.id;
            //console.log(id);
            const deleteAlert = confirm('¿Estas seguro que quieres eliminar este post?')
              if(deleteAlert == true){
            deletePost(id)
            alert('se borro tu post')
          }else{
            alert('post no eliminado!')
          }
           
              })
            })
            
        const postBtn = divFeed.querySelector('#post-btn');

        const btnEdit = divFeed.querySelectorAll('.btn-edit');
       btnEdit.forEach( btn => {
        btn.addEventListener('click',async (e) => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          divFeed.querySelector('#form-container').classList.toggle("hidden");
          const doc = await getPost(e.target.dataset.id)
          console.log(doc)
          const task = doc.data();
          console.log(task)
            postForm.querySelector('#title').value = task.title;
            postForm.querySelector('#description').value = task.description;

            postForm.querySelector('#price').value = task.price;
            postForm.querySelector('#materials').value = task.materials;
          
          editStatus = true; 
          id = e.target.dataset.id;
          postBtn.innerText = 'Actualizar'

          
          });
        
        })
       
        
        
        //dar like a los post
        const btnLike = postContainer.querySelectorAll('.btn-like');
        console.log(btnLike);
        btnLike.forEach((like) => {
          console.log(btnLike);
          like.addEventListener('click', () => {
          // id = e.target.dataset.id;
            console.log('ola');
            //const idLike = e.target.dataset.id;
            const userId =auth.currentUser.uid;
            likePost(like.value, userId);
            console.log(id);
          });
        });

      });



    }  
        postForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const title = divFeed.querySelector('#title').value;
          const description = divFeed.querySelector('#description').value;
          const price = divFeed.querySelector('#price').value;
          const materials = divFeed.querySelector('#materials').value;
         if(!editStatus){

           createPost(title, description, price, materials);
         } else {
           editPost(
             id,{
               title,

               description,
             }
           )
           editStatus =false;
         }
          
          postForm.reset();
        });





  return divFeed;
};
