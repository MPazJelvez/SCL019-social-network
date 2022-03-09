import { login } from '../Views/Login.js';
import { register } from '../Views/Register.js';
import { home } from '../Views/home.js';
import { feed } from '../Views/feed.js';

export const router = (hash) => {
  const containerRoot = document.getElementById('app');
  containerRoot.innerHTML = '';// se reinicia a vacio
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    containerRoot.appendChild(home());
  } else if (hash === '#/home') {
    containerRoot.appendChild(home());
  } else if (hash === '#/login') {
    containerRoot.appendChild(login());
  } else if (hash === '#/register') {
    containerRoot.appendChild(register());
  } else if (hash === '#/feed') {
    containerRoot.appendChild(feed());
  }
};
