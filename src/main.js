// Este es el punto de entrada de tu aplicacion
import { router } from './lib/routers.js';
import { app } from './lib/config-firebase.js'

window.addEventListener('load', () => {
  app;
  router(window.location.hash);
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});