import { signIn } from '../lib/index.js';

export const login = () => {
  window.location.hash = '/login';
  const divLogin = document.createElement('div');
  divLogin.className = 'div';
  divLogin.innerHTML = ` 
    <h1 class ="login-title"> Iniciar Sesión</h1>
        <div class="error-message">
        <span class="error" id="invalidEmail"> Ingrese un correo válido </span>
        <span class="error hidden" id="invalidPassword"> Ingresa una contraseña </span>
        <span class="error hidden" id="noSpace"> No puede haber espacios vacíos </span>
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
         <span> ¿Has olvidado tu contraseña?</span>
         <a class="btn" href="#" id="login">Ingresar</a>
       </form>
 
   `;

  divLogin.querySelector('#login').addEventListener('click', () => {
    const emailInput = document.querySelector('#userEmail').value;
    const passwordInput = document.querySelector('#password').value;
   signIn(emailInput, passwordInput);
  });

  return divLogin;
};
