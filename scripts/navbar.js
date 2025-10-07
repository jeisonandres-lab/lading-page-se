  document.addEventListener("DOMContentLoaded", function () {
    // Obtiene la ruta del archivo actual (por ejemplo: 'index.html')
    const currentPage = location.pathname.split("/").pop();
    console.log(currentPage); // Muestra la página actual en la consola para depuración
    // Selecciona todos los enlaces con la clase 'nav-link pagin'
    document.querySelectorAll('.nav-link').forEach(function (link) {
      // Obtiene el href del enlace (por ejemplo: 'index.html')
      const linkPage = link.getAttribute('href');
      // Si coincide con la página actual, agrega la clase
      if (linkPage === currentPage) {
        link.classList.add('navbar-active');
      }
    });
  });