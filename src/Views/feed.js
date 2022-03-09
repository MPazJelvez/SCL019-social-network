import { logOut } from '../lib/index.js';

export const feed = () => {
  window.location.hash = '/feed';
  const divFeed = document.createElement('div');
  divFeed.className = 'div';
  divFeed.innerHTML = ` 
  
      <h1 class ="login-title"> Feed </h1>
       <a class="btn" id="post"> Postear </a>
        <a href="" id="logOut"> Salir 
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M8.514 20h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2h-4v12h4v2Z"/><path d="m13.842 17.385l1.42-1.408l-3.92-3.953h9.144a1 1 0 1 0 0-2h-9.162l3.98-3.947l-1.408-1.42l-6.391 6.337l6.337 6.391Z"/></g></svg>
       </a>
       
        `;

  divFeed.querySelector('#logOut').addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  return divFeed;
};
