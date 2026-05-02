/* ========================================
   TOXCITY EVOLUTION - JAVASCRIPT AVANZADO
   Interactividad, Validaciones y Animaciones
   ======================================== */

// ========================================
// 1. INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Toxcity Evolution - Sitio cargado correctamente');
    
    // Inicializar funcionalidades
    initLazyLoading();
    initProductFilter();
    initFormValidation();
    initScrollSpy();
    initSmoothScroll();
    initAOS();
});

// ========================================
// 2. LAZY LOADING DE IMÁGENES
// ========================================

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Para imágenes
                    if (img.tagName === 'IMG') {
                        img.src = img.dataset.src || img.src;
                    }
                    
                    // Para videos
                    if (img.tagName === 'VIDEO') {
                        const source = img.querySelector('source');
                        if (source && !source.src) {
                            source.src = source.dataset.src || source.src;
                            img.load();
                        }
                    }
                    
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antiguos
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// ========================================
// 3. FILTRADO DE PRODUCTOS
// ========================================

function initProductFilter() {
    const filterButtons = document.querySelectorAll('input[name="filtro"]');
    const productos = document.querySelectorAll('.producto');
    
    filterButtons.forEach(button => {
        button.addEventListener('change', function() {
            const filtro = this.value;
            
            productos.forEach(producto => {
                const categoria = producto.getAttribute('data-categoria');
                
                if (filtro === 'todos' || categoria === filtro) {
                    // Mostrar con animación
                    producto.style.display = 'block';
                    setTimeout(() => {
                        producto.style.opacity = '1';
                        producto.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Ocultar con animación
                    producto.style.opacity = '0';
                    producto.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        producto.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// 4. VALIDACIÓN DE FORMULARIO
// ========================================

function initFormValidation() {
    const citaForm = document.getElementById('citaForm');
    
    if (citaForm) {
        citaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación nativa
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const empresa = document.getElementById('empresa').value;
            const fecha = document.getElementById('fecha').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Crear mensaje para WhatsApp
            const whatsappMessage = `
*RESERVA DE CITA - TOXCITY EVOLUTION*

*Datos Personales:*
👤 Nombre: ${nombre}
📧 Email: ${email}
📱 Teléfono: ${telefono}

*Información del Negocio:*
🏢 Empresa: ${empresa}
📅 Fecha Preferida: ${fecha}

*Mensaje Adicional:*
${mensaje || 'Sin mensaje adicional'}

---
Mensaje enviado desde el sitio web de Toxcity Evolution
            `.trim();
            
            // Codificar mensaje
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/573001234567?text=${encodedMessage}`;
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('citaModal'));
            if (modal) modal.hide();
            
            // Limpiar formulario
            this.reset();
            this.classList.remove('was-validated');
            
            // Mostrar notificación
            showNotification('¡Mensaje enviado a WhatsApp! Te contactaremos pronto.', 'success');
        });
    }
}

// ========================================
// 5. SCROLL SPY
// ========================================

function initScrollSpy() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 100
    });
}

// ========================================
// 6. SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Offset para navbar sticky
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 7. ANIMACIONES AL SCROLL (AOS)
// ========================================

function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase de animación
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar tarjetas
    document.querySelectorAll('.product-card, .advantage-card, .card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ========================================
// 8. NOTIFICACIONES
// ========================================

function showNotification(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insertar al inicio del body
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================================
// 9. CONTADOR DE VISITAS (OPCIONAL)
// ========================================

function initVisitCounter() {
    let visits = localStorage.getItem('toxcityVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('toxcityVisits', visits);
    console.log(`📊 Visitas: ${visits}`);
}

initVisitCounter();

// ========================================
// 10. EFECTOS DE HOVER AVANZADOS
// ========================================

document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// ========================================
// 11. DETECCIÓN DE DISPOSITIVO
// ========================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// 12. ANALYTICS (OPCIONAL)
// ========================================

function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`📊 Evento: ${eventName}`, eventData);
}

// Rastrear clics en botones de WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('whatsapp_click', {
            source: this.closest('section')?.id || 'unknown'
        });
    });
});

// ========================================
// 13. UTILIDADES
// ========================================

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Copiado al portapapeles!', 'success');
    });
}

// Función para formatear teléfono
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// Función para validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// 14. SERVICE WORKER (OPCIONAL - PWA)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomentar para habilitar PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ========================================
// 15. EVENTOS PERSONALIZADOS
// ========================================

// Evento personalizado para cuando el usuario hace scroll
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Mostrar/ocultar botón flotante WhatsApp
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        if (scrollTop > 300) {
            whatsappFloat.style.display = 'flex';
        } else {
            whatsappFloat.style.display = 'flex';
        }
    }
    
    // Efecto parallax (opcional)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && scrollTop < 600) {
        heroSection.style.backgroundPosition = `0 ${scrollTop * 0.5}px`;
    }
});

// ========================================
// 16. ACCESIBILIDAD
// ========================================

// Mejorar accesibilidad de teclado
document.addEventListener('keydown', function(e) {
    // ESC para cerrar modal
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('citaModal'));
        if (modal) modal.hide();
    }
});

// ========================================
// 17. DEBUG MODE (Descomenta para desarrollo)
// ========================================

const DEBUG = false;

if (DEBUG) {
    console.log('🔧 Modo Debug Activado');
    console.log('Dispositivo móvil:', isMobileDevice());
    console.log('Viewport:', window.innerWidth + 'x' + window.innerHeight);
}

// ========================================
// 18. EXPORTAR FUNCIONES (Para uso externo)
// ========================================

window.ToxcityAPI = {
    showNotification,
    trackEvent,
    copyToClipboard,
    formatPhoneNumber,
    isValidEmail,
    isMobileDevice
};

console.log('✅ Toxcity API disponible en window.ToxcityAPI');
