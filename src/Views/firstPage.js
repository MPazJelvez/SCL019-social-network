export const firstPage = () => {
  window.location.hash = '/firstPage';
  const divFirstPage = document.createElement('div');
  divFirstPage.className = 'div';
  const pageFirstPage = ` 
      <h1 class ="login-title"> Primera Página </h1>
            <a  class="btn" href="#/home">Volver</a>
        `;
  divFirstPage.innerHTML = pageFirstPage;
  return divFirstPage;
};
