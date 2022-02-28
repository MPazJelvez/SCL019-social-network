import { createUser } from '../lib/index.js';

export const register = () => {
  window.location.hash = '/register';
  const divRegister = document.createElement('div');
  divRegister.className = 'div';
  divRegister.innerHTML = ` 

<h1 class ="register-title"> Registrarse</h1>
        <div class="error-message">
        <span class="error"> Ingrese un correo válido </span>
        <span class="error"> Ingrese un usuario válido </span>
        <span class="error"> Ingresa una contraseña </span>
        <span class="error"> Repetir contraseña </span>
        <span class="error"> Las contraseñas no coinciden </span>
        <span class="error"> Debes aceptar los términos y condiciones para poder continuar </span>
        </div>
       <form class="register-form">
          <div class="register-input">
           <label for ="Email">Correo</label>
           <input type="email" placeholder="ingresa tu correo" 
           name ="Email" id="email">
          </div>
          <div class="register-input">
           <label for ="user">Usuario</label>
           <input type="text" placeholder="ingresa tu usuario" 
           name ="user" id="user">
          </div> 
          <div class="register-input">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password" id="password">
          </div>
          <div class="register-input">
           <label for ="password">Repetir Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password" id="repeatPassword">
          </div>
          <div class="register-input center" >
       
         <span > <input type="checkbox"> He leído y acepto los términos y condiciones </span>
          </div>

         <a class="btn" href="#/firstPage" id="register">Registrarse</a>
      
       </form>
       `;
  divRegister.querySelector('#register').addEventListener('click', () => {
    const emailInput = document.querySelector('#email').value;
    const passwordInput = document.querySelector('#password').value;
    const userInput = document.querySelector('#user').value;
    createUser(emailInput, passwordInput, userInput);
  });

  return divRegister;
};
