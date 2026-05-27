document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    // Función para cambiar de pestaña
    function switchTab(targetId) {
        const targetBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        const targetSection = document.getElementById(targetId);

        if (targetBtn && targetSection) {
            // Quitar clase active de todos los botones y secciones
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Añadir clase active al botón y sección correctos
            targetBtn.classList.add('active');
            targetSection.classList.add('active');
        }
    }

    // 1. Revisar la URL cuando la página carga por primera vez
    // Si alguien entra con #amigurumis, abrimos esa pestaña automáticamente
    let hash = window.location.hash.replace('#', '');
    if (hash === 'crochet' || hash === 'amigurumis' || hash === 'bolsos') {
        switchTab(hash);
    }

    // 2. Cambiar de pestaña al hacer clic
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-target');
            
            switchTab(targetId);

            // Actualizar la URL en el navegador sin recargar la página
            history.pushState(null, null, `#${targetId}`);
        });
    });
});