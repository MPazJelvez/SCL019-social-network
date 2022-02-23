export const register = () => {
  window.location.hash = '/register';
  const divRegister = document.createElement('div');
  divRegister.className = 'div';
  const pageRegister = ` 

<h1 class ="register-title"> Registrarse</h1>
       <form class="register-form">
          <div class="register-input">
           <label for ="Email">Correo</label>
           <input type="email" placeholder="ingresa tu correo" 
           name ="Email">
          </div>
          <div class="register-input">
           <label for ="user">Usuario</label>
           <input type="text" placeholder="ingresa tu usuario" 
           name ="user">
          </div> 
          <div class="register-input">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password">
          </div>
          <div class="register-input">
           <label for ="password">Repetir Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password">
          </div>
          <div class="register-input center" >
       
         <span > <input type="checkbox"> He leído y acepto los términos y condiciones </span>
          </div>

         <a class="btn" href="#/firstPage">Registrarse</a>
      
       </form>
       `;
  divRegister.innerHTML = pageRegister;

  return divRegister;
};
