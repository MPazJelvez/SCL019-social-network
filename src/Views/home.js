export const home = () => {
  window.location.hash = '/home';
  const divHome = document.createElement('div');
  divHome.className = 'div';
  const pageHome = ` 
 <section class="home-container">
 <h1 class ="home-title">¡Bienvenido!</h1>
 <div class ="home-btn">
  <a href="#/login">Iniciar Sesion</a>
  <a href="#">Registrarse con Google</a>
  <a href="#/register">Registrarse</a>
 </div>
 </section>
 `;

  divHome.innerHTML = pageHome;

  return divHome;
};
