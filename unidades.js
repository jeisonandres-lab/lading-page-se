document.addEventListener('DOMContentLoaded', () => {
    function cambiarImagenesResponsive() {
        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        if (window.innerWidth <= 990.98) {
            if (img1) img1.src = './img/unidades/coworking_mbl.png';
            if (img2) img2.src = './img/unidades/rental_mb.png';
            if (img3) img3.src = './img/unidades/invstmet_mb.png';
        } else {
            if (img1) img1.src = './img/unidades/coworkingbase.png';
            if (img2) img2.src = './img/unidades/rentalbase.png';
            if (img3) img3.src = './img/unidades/investbase.png';
        }
    }

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    cambiarImagenesResponsive();
    window.addEventListener('resize', cambiarImagenesResponsive);
});