export const login = () => {
  window.location.hash = '/login';
  const divLogin = document.createElement('div');
  divLogin.className = 'div';
  divLogin.innerHTML = ` 
    <h1 class ="login-title"> Iniciar Sesion</h1>
        <div class="error-message">
        <span class="error"> Ingrese un correo válido </span>
        <span class="error"> Ingrese un usuario válido </span>
        <span class="error"> Ingresa una contraseña </span>
        <span class="error"> No puede haber espacios vacíos </span>
        <span class="error"> Completar este campo para poder continuar </span>
        </div>
       <form class="login-form">
         <div class="login-input">
           <label for="userEmail">Correo/ Usuario</label>
           <input type="text" placeholder="ingresa tu correo o nombre de usuario" 
           name="userEmail" id="userEmail">
          </div>
          <div class="login-input">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password" id="password">
           </div>
         <span> ¿Has olvidado tu contraseña?</span>
         <a class="btn" href="#/firstPage" id="login">Ingresar</a>
       </form>
 
   `;

  divLogin.querySelector('#login').addEventListener('click', () => {
    const emailInput = document.querySelector('#userEmail').value;
    const passwordInput = document.querySelector('#password').value;
    // createUser(emailInput, passwordInput);
  });

  return divLogin;
};
