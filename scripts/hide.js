// Seleccionar todos los elementos con la clase "baufest"
var baufest = document.querySelectorAll(".baufest");
// Seleccionar todos los elementos con la clase "globant"
var globant = document.querySelectorAll(".globant");

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el botón por su ID
    var glbexpBtn = document.getElementById('GLB');

    // Agregar un event listener para el clic en el botón
    glbexpBtn.addEventListener('click', function () {

        // Ocultar elementos con la clase "globant"
        globant.forEach(function (element) {
                        // Verificar si el elemento está actualmente oculto
                        if (element.style.display === 'none' || getComputedStyle(element).display === 'none') {
                            // Si está oculto, cambiar a 'flex'
                            element.style.display = 'flex';
                        } else {
                            // Si no está oculto, cambiar a 'none'
                            element.style.display = 'none';
                        }
        });
        baufest.forEach(function(element){
            element.style.display= 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el botón por su ID
    var bfsBtn = document.getElementById('BFS');

    // Agregar un event listener para el clic en el botón
    bfsBtn.addEventListener('click', function () {

        // Ocultar elementos con la clase "globant"
        baufest.forEach(function (element) {            
            // Verificar si el elemento está actualmente oculto
            if (element.style.display === 'none' || getComputedStyle(element).display === 'none') {
                // Si está oculto, cambiar a 'flex'
                element.style.display = 'flex';
            } else {
                // Si no está oculto, cambiar a 'none'
                element.style.display = 'none';
            }
        });
        globant.forEach(function(element){
            element.style.display= 'none';
        });
    });
});