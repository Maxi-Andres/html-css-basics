let layoutIndex = 0; // Índice para controlar el cambio de layouts

// Función para cambiar el diseño de Flexbox
function changeLayout() {
    const container = document.querySelector('.container');
    const layouts = ['layout1', 'layout2', 'layout3', 'layout4', 'layout5', 'layout6'];

    // Eliminar la clase actual
    container.classList.remove(layouts[layoutIndex]);

    // Cambiar al siguiente diseño
    layoutIndex = (layoutIndex + 1) % layouts.length;

    // Aplicar la nueva clase
    container.classList.add(layouts[layoutIndex]);
}
