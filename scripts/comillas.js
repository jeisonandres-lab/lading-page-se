document.addEventListener('DOMContentLoaded', function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const elementsToUpdate = document.querySelectorAll('.comillas'); // 🎯 1. Selecciona todos los elementos con la clase 'comillas'
    let osClass = null; // 🎯 2. Inicializa osClass como null para evitar errores

    // Detección de iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        osClass = 'os-ios';
    } 
    // Detección de Android
    else if (/android/i.test(userAgent)) {
        osClass = 'os-android';
    } 
    // Detección de Windows
    else if (/windows/i.test(userAgent)) {
        osClass = 'os-windows';
    }

    if (osClass) {
        // Imprime el console.log
        console.log("Sistema operativo detectado: " + osClass);
        
        // 🎯 3. Itera sobre los elementos seleccionados y agrega la clase OS
        elementsToUpdate.forEach(element => {
            element.classList.add(osClass);
        });
        
        // Opcional: También agrega la clase al body (como ya lo tenías)
        document.body.classList.add(osClass + '-main'); 
    } else {
         console.log("Sistema operativo no detectado o no listado.");
    }
});