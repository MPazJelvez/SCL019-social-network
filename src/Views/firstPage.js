import { logOut } from "../lib/index.js";

export const firstPage = () => {
  window.location.hash = "/firstPage";
  const divFirstPage = document.createElement("div");
  divFirstPage.className = "div";
  divFirstPage.innerHTML = ` 
      <h1 class ="login-title"> Primera Página </h1>
            <a  class="btn" href="" id="logOut"> Salir </a>
        `;

  divFirstPage.querySelector("#logOut").addEventListener("click", (e) => {
    e.preventDefault();
    logOut();
  });

  return divFirstPage;
};
