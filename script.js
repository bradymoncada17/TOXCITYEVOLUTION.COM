// Script.js - Toxcity Evolution

// Filtrado de productos
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productos = document.querySelectorAll('.producto');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Actualizar botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filtrar productos
            productos.forEach(producto => {
                if (filter === 'all' || producto.getAttribute('data-categoria') === filter) {
                    producto.classList.remove('hidden');
                    producto.style.display = 'block';
                } else {
                    producto.classList.add('hidden');
                    producto.style.display = 'none';
                }
            });
        });
    });

    // Establecer "Todos" como activo por defecto
    filterBtns[0].classList.add('active');
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const negocio = document.getElementById('negocio').value;
    const fecha = document.getElementById('fecha').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear mensaje para WhatsApp
    const whatsappMessage = `*RESERVA DE CITA - TOXCITY EVOLUTION*

*Datos Personales:*
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

*Información del Negocio:*
Negocio: ${negocio}
Fecha Preferida: ${fecha}

*Mensaje Adicional:*
${mensaje || 'Sin mensaje adicional'}

---
Mensaje enviado desde el sitio web de Toxcity Evolution`;

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/573001234567?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Limpiar formulario
    this.reset();

    // Mostrar mensaje de éxito
    alert('¡Mensaje enviado a WhatsApp! Te contactaremos pronto.');
});

// Smooth scroll para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Navbar collapse on link click (mobile)
const navbarCollapse = document.querySelector('.navbar-collapse');
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});

// Validación de formulario
const forms = document.querySelectorAll('.needs-validation');
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});

// Efecto parallax en hero section (opcional)
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Contador de visitas (opcional, usando localStorage)
function updateVisitCounter() {
    let visits = localStorage.getItem('toxcityVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('toxcityVisits', visits);
    console.log(`Visitas: ${visits}`);
}

updateVisitCounter();

// Log de carga
console.log('✅ Toxcity Evolution - Sitio cargado correctamente');
