export const login = () => {
  window.location.hash = '/login';
  const divLogin = document.createElement('div');
  divLogin.className = 'div';
  const pageLogin = ` 
    <h1 class ="login-title"> Iniciar Sesion</h1>
       <form class="login-form">
         <div class="login-input">
           <label for ="userEmail">Correo/ Usuario</label>
           <input type="text" placeholder="ingresa tu correo o nombre de usuario" 
           name ="userEmail">
          </div>
          <div class="login-input">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password">
           </div>

         <span> ¿Has olvidado tu contraseña?</span>

         <a class="btn" href="#">Ingresar</a>
      
       </form>
 
   `;
  divLogin.innerHTML = pageLogin;

  return divLogin;
};
