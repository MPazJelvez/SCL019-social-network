
export const featured = () => {
    
    const divFeatured = document.createElement('div');
   
    divFeatured.className = 'div';
    divFeatured.innerHTML = `
    <div>
    <a href="https://www.instagram.com/blondieamigurumis/
    "><img src="../assets/image/blondieamigurumis.jpeg"/> </a>
    <a href="https://www.instagram.com/p.ink.u/
    "><img src="../assets/image/Gaby.png"/> </a>
    <a href="https://www.instagram.com/guatitademanzana/
    "><img src="../assets/image/guatita-manzana.png"/></a>
    <a href="https://www.instagram.com/galeriadigiuli/
    "><img src="../assets/image/Guili.jpg"/></a>
    <a href="https://www.instagram.com/pickleisis/
    "><img src="../assets/image/Pandora.jpeg"/></a>
    <a href="https://www.instagram.com/tallerquemonono/
    "><img src="../assets/image/tallerquemonono.jpg"/></a>
    </div>
    `
    
    return divFeatured;
}
