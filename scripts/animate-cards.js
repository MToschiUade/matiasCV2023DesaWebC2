document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los elementos con la clase '.card-anim-a'
    var cardAnimElements = document.querySelectorAll('.card-anim');

    // Iterar sobre cada elemento y agregar el event listener
    cardAnimElements.forEach(function (element) {
        // Agregar la clase al pasar el ratón
        element.addEventListener('mouseenter', function () {
            element.classList.add('animado');
        });

        // Quitar la clase al retirar el ratón
        element.addEventListener('mouseleave', function () {
            element.classList.remove('animado');
        });
    });
});
