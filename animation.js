document.addEventListener('DOMContentLoaded', () => {
    // Animación para texto
    const elementos = document.querySelectorAll('.animation-text');
    const opciones = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('tracking-in-contract');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, opciones);
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

    // Animación para blur (solo una vez)
    const blurElements = document.querySelectorAll('.animation-blur');
    const blurCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-blurred-top');
                observer.unobserve(entry.target);
            }
        });
    };

    const blurObserver = new IntersectionObserver(blurCallback, opciones);
    blurElements.forEach(elemento => {
        blurObserver.observe(elemento);
    });



    // Animación para blur (solo una vez)
    const movimiento = document.querySelectorAll('.scale-up-tl');
    const blurCallback1 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scale-up-tl--active');
                observer.unobserve(entry.target);
            }
        });
    };

    const blurObserver2 = new IntersectionObserver(blurCallback1, opciones);
    movimiento.forEach(elemento => {
        blurObserver2.observe(elemento);
    });


    

    // Animación para movie_top (solo una vez)
    const elementos3 = document.querySelectorAll('.movie_top');
    const opciones3 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback2 = (entries, observer2) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('movie_top--active');
                observer2.unobserve(entry.target); // Deja de observar después de la primera vez
            }
        });
    };

   
});