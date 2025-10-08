// Script optimizado - Sin animaciones pesadas

document.addEventListener('DOMContentLoaded', () => {
    
    // Efecto suave de aparición al hacer scroll (solo una vez)
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                // Dejar de observar después de la primera aparición
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Aplicar efecto inicial y observar tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta-actividad');
    tarjetas.forEach((tarjeta, index) => {
        // Estado inicial para la animación
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(30px)';
        tarjeta.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Agregar delay escalonado
        tarjeta.style.transitionDelay = `${index * 0.1}s`;
        
        observador.observe(tarjeta);
    });

    // Smooth scroll para toda la página
    document.documentElement.style.scrollBehavior = 'smooth';
});