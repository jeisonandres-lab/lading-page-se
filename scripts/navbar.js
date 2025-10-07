document.addEventListener("DOMContentLoaded", function () {
    const currentPage = location.pathname.split("/").pop();
    // Páginas que deben activar el enlace "unidades"
    const unidadesPages = ['invesments.php', 'rental.php', 'coworking.php'];
    document.querySelectorAll('.nav-link').forEach(function (link) {
        const linkPage = link.getAttribute('href');
        // Si la página actual es una de las de unidades, activa el enlace "unidades"
        if (unidadesPages.includes(currentPage) && linkPage.includes('unidades')) {
            link.classList.add('navbar-active');
        }
        // Si coincide normalmente, activa el enlace correspondiente
        else if (linkPage === currentPage) {
            link.classList.add('navbar-active');
        }
    });
});