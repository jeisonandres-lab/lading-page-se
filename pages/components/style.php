<style>
    body {
        font-family: "Poppins", sans-serif;
        background-color: var(--color-primario-negro) !important;
    }


    @keyframes appear_1 {
        from {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
            /* Oculta todo desde la derecha */
        }

        to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
            /* Muestra todo */
        }
    }


    @keyframes appear {
        from {
            transform: scale(0.50);
            filter: brightness(0.5);
            opacity: 0.5;
        }

        to {
            transform: scale(1);
            filter: brightness(1);
            opacity: 1;
            /*  <-- Assumed, as it's typically the default 'to' state */
        }
    }


    @keyframes movie_top {
        from {
            transform: scale(0.50);
            filter: brightness(0.5);
            opacity: 0.5;
        }

        to {
            transform: scale(1);
            filter: brightness(1);
            opacity: 1;
            /*  <-- Assumed, as it's typically the default 'to' state */
        }
    }

    @keyframes slideUpFade {
        from {
            opacity: 0;
            transform: translateY(30px);
            /* Comienza 30px más abajo */
            filter: blur(5px);
            /* Comienza ligeramente borroso */
        }

        to {
            opacity: 1;
            transform: translateY(0);
            /* Vuelve a su posición original */
            filter: blur(0);
            /* Totalmente nítido */
        }
    }


    .movie_top2 {
        /* 1. Cambia el nombre de la animación */
        animation: slideUpFade linear;
        animation-timeline: view();
        /* 2. Suaviza la animación para que el efecto "entre" más elegante */
        animation-timing-function: ease-out;
        /* Hace que el final sea más suave */
        /* 3. Ajusta el rango para que se complete en el primer 30% del viewport */
        animation-range: entry 0% cover 30%;
    }

    .section_animate1 {
        animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
    }

    .section_animate2 {
        animation: appear_1 linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
    }

    .section_animate2--active {
        animation: appear s both;
    }

    .movie_top {
        animation: movie_top linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
    }
</style>