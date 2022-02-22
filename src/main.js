// Este es el punto de entrada de tu aplicacion
import { router } from './lib/routers.js';
import { myFunction } from './lib/index.js';

myFunction();
window.addEventListener('load', () => {
  router(window.location.hash);
//lookout();
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
//lookout();
});
