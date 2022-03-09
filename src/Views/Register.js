import { createUser } from '../lib/index.js';

export const register = () => {
  window.location.hash = '/register';
  const divRegister = document.createElement('div');
  divRegister.className = 'div';
  divRegister.innerHTML = ` 

<h1 class ="register-title"> Registrarse</h1>
        <div class="error-message">
        <span class="error hidden" id="invalidEmail"> Ingrese un correo válido </span>
        <span class="error hidden" id="invalidPassword"> Ingresa una contraseña </span>
        <span class="error hidden" id="agreeTC"> Debes aceptar los términos y condiciones para poder continuar </span>
        <span class="error hidden" id="missingEmail"> Ingresa un correo </span>
        <span class="error hidden" id="weakPassword"> La contraseña debe tener al menos 6 caracteres </span>
        <span class="error hidden" id="invalidUserName"> El nombre de usuario no puede estar vacío </span>
        <span class="error hidden" id="emailAlreadyUse"> El correo ya está en uso </span>
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
          <div class="register-input center" >
       
         <span > <input type="checkbox" id="checkbox"> He leído y acepto los términos y condiciones </span>
          </div>

         <a class="btn" href="" id="register">Registrarse</a>
      
       </form>
       `;
  divRegister.querySelector('#register').addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('#email').value;
    const passwordInput = document.querySelector('#password').value;
    createUser(emailInput, passwordInput);
  });

  return divRegister;
};
