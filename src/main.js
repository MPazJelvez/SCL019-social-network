// Este es el punto de entrada de tu aplicacion
// debugger;
import { router } from './lib/routers.js';

window.addEventListener('load', () => {
  router(window.location.hash);

  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });

});