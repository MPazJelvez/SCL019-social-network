// Este es el punto de entrada de tu aplicacion
// debugger;
import { router } from './lib/routers.js';
import { appInit } from './lib/config-firebase.js'

window.addEventListener('load', () => {
  const firebaseObject = appInit();
  router(window.location.hash, firebaseObject);

  window.addEventListener('hashchange', () => {
    router(window.location.hash, firebaseObject);
  });

});