// Este es el punto de entrada de tu aplicacion
import { router } from './lib/routers.js';


window.addEventListener('load', () => {
  router(window.location.hash);
//lookout();
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
//lookout();
});
