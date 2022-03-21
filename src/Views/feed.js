


import { logOut} from '../lib/index.js';
import { createPost, onGetPost, getPost, deletePost, editPost } from '../lib/firestore.js'


export const feed = () => {
  window.location.hash = '/feed';
  const divFeed = document.createElement('div');
  let id = '';
  divFeed.className = 'div';
  divFeed.innerHTML = ` 
  
      <h1 class ="login-title"> Feed </h1>
        <a class="btn" id="post"> Postear </a>
        <a href="" id="logOut"> Salir 
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M8.514 20h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2h-4v12h4v2Z"/><path d="m13.842 17.385l1.42-1.408l-3.92-3.953h9.144a1 1 0 1 0 0-2h-9.162l3.98-3.947l-1.408-1.42l-6.391 6.337l6.337 6.391Z"/></g></svg>
        </a>
        <div class='form-container'>
        <form class='post-form' id='post-form'>
          <label for='title'> Titulo </label>
          <input type='text' id='title'>
          <label for='description'> Escribir Post </label>
          <textarea name='description' id="description" cols="0" rows="3"></textarea>
          <button class='btn' id='post-btn'>Postear</button>
          </form>
        </div>
        <div class='post-container' id='post-container'></div>
        `;
  const postContainer = divFeed.querySelector('#post-container');
  const postForm = divFeed.querySelector('#post-form');
  let editStatus = false;
      
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
          <div class='post'>
          <p>${posts.userName}</p>
          <h3>${posts.title}</h3>
          <p>${posts.description}</p>
          <div>
          <button class='btn-delete btn' data-id='${doc.id}'>Delete</button>
          <button class='btn-edit btn' data-id='${doc.id}'>Edit</button>          
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
          const doc = await getPost(e.target.dataset.id)
          console.log(doc)
          const task = doc.data();
          console.log(task)
       postForm.querySelector('#title').value = task.title;
       postForm.querySelector('#description').value = task.description;
          
          editStatus = true; 
          id = e.target.dataset.id;
          postBtn.innerText = 'Actualizar'

          
          });
        
        })
          
      });
    }  
        postForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const title = divFeed.querySelector('#title').value;
          const description = divFeed.querySelector('#description').value;
         if(!editStatus){

           createPost(title, description );
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
