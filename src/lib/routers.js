import { login } from '../Views/Login.js';
import { register } from '../Views/Register.js';
import { home } from '../Views/home.js';
import { feed } from '../Views/feed.js';

export const router = ( hash, firebaseObject ) => {
  const containerRoot = document.getElementById('app');
  containerRoot.innerHTML = '';// se reinicia a vacio
  
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    containerRoot.appendChild(home(firebaseObject));
  } else if (hash === '#/home') {
    containerRoot.appendChild(home(firebaseObject));
  } else if (hash === '#/login') {
    containerRoot.appendChild(login(firebaseObject));
  } else if (hash === '#/register') {
    containerRoot.appendChild(register(firebaseObject));
  } else if (hash === '#/feed') {
    containerRoot.appendChild(feed(firebaseObject));
  }
};
