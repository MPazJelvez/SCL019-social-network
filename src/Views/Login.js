import { signIn, resetPassword } from '../lib/index.js';

export const login = (firebaseObject) => {
  window.location.hash = '/login';
  const divLogin = document.createElement('div');
  divLogin.className = 'div';
  divLogin.innerHTML = ` 
    <h1 class ="login-title"> Iniciar Sesión</h1>
        <div class="error-message">
        <span class="error hidden" id="invalidEmail"> Ingrese un correo válido </span>
        <span class="error hidden" id="invalidPassword"> Contraseña incorrecta </span>
        <span class="error hidden" id="userNotFound"> Usuario no encontrado </span>
        <span class="error hidden" id="completeField"> Debes ingresar una contraseña </span>
        </div>
       <form class="login-form">
         <div class="login-input">
           <label for="userEmail">Correo</label>
           <input type="text" placeholder="ingresa tu correo" 
           name="userEmail" id="userEmail">
          </div>
          <div class="login-input">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password" id="password">
           </div>
         <span id="resetPassword" class="resetPassword"> ¿Has olvidado tu contraseña?</span>
         <a class="btn" href="" id="login">Ingresar</a>
       </form>
 
   `;

  divLogin.querySelector('#login').addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('#userEmail').value;
    const passwordInput = document.querySelector('#password').value;
    signIn(firebaseObject.auth , emailInput, passwordInput);
  });

  divLogin.querySelector('#resetPassword').addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('#userEmail').value;
    resetPassword(firebaseObject.auth, emailInput);
  });

  return divLogin;
};
