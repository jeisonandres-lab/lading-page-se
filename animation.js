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
});