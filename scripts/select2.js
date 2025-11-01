// $('.select2hg').select2({
//   placeholder: 'Select an option'
// });

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.custom-select-wrapper');
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const optionsList = wrapper.querySelector('.custom-options');
    const options = optionsList.querySelectorAll('.option');
    const hiddenInput = wrapper.querySelector('#interes');
    const selectedText = trigger.querySelector('span');

    // 1. Alternar la visibilidad de la lista
    trigger.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });

    // 2. Manejar la selección de una opción
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Actualizar el texto visible
            selectedText.textContent = this.textContent;
            
            // Actualizar el valor del input oculto para el formulario
            hiddenInput.value = this.getAttribute('data-value');

            // Cerrar la lista
            optionsList.style.display = 'none';

            // Opcional: Remover clase 'selected' de las demás y ponerla en la actual
            options.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // 3. Cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!wrapper.contains(e.target)) {
            optionsList.style.display = 'none';
        }
    });
});