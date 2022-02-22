export const register = () => {
  window.location.hash = '/register';
  const divRegister = document.createElement('div');
  divRegister.className = 'div';
  const pageRegister = ` 

<h1 class ="register-title"> Registrarse</h1>
       <form class="register-form">
           <label for ="Email">Correo</label>
           <input type="email" placeholder="ingresa tu correo" 
           name ="Email">
           <label for ="user">Usuario</label>
           <input type="text" placeholder="ingresa tu usuario" 
           name ="user">
           <label for ="password">Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password">
           <label for ="password">Repetir Contraseña</label>
           <input type="password" placeholder="ingresa tu Contraseña" 
           name ="password">
         <label for="">He leído y acepto los términos y condiciones </label>
         <input type="checkbox" >

         <a href="#/firstPage">Registrarse</a>
      
       </form>
       `;
  divRegister.innerHTML = pageRegister;

  return divRegister;
};
