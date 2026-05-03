/* ========================================
   TOXCITY EVOLUTION - JAVASCRIPT PREMIUM
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ Toxcity Evolution - Sitio cargado');
    
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Inicializar funcionalidades
    initScrollEffects();
    initNavbarEffects();
    initProductHover();
    initSmoothScroll();
});

/* ========================================
   SCROLL EFFECTS
   ======================================== */

function initScrollEffects() {
    const navbar = document.querySelector('.navbar-premium');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

/* ========================================
   NAVBAR EFFECTS
   ======================================== */

function initNavbarEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover clase active de todos
            navLinks.forEach(l => l.classList.remove('active'));
            // Agregar clase active al actual
            this.classList.add('active');
        });
    });
}

/* ========================================
   PRODUCT HOVER EFFECTS
   ======================================== */

function initProductHover() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   PARALLAX EFFECT
   ======================================== */

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-premium');
    const scrollTop = window.pageYOffset;
    
    if (heroSection && scrollTop < 1000) {
        heroSection.style.backgroundPosition = `0 ${scrollTop * 0.5}px`;
    }
});

/* ========================================
   ANALYTICS
   ======================================== */

function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`📊 Evento: ${eventName}`, eventData);
}

// Rastrear clics en WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('whatsapp_click', {
            source: this.closest('section')?.id || 'unknown',
            text: this.textContent
        });
    });
});

// Rastrear clics en Instagram
document.querySelectorAll('a[href*="instagram"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('instagram_click', {
            source: this.closest('section')?.id || 'unknown'
        });
    });
});

/* ========================================
   LAZY LOADING
   ======================================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ========================================
   DEVICE DETECTION
   ======================================== */

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

console.log('📱 Dispositivo móvil:', isMobileDevice());

/* ========================================
   PERFORMANCE MONITORING
   ======================================== */

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('⏱️ Tiempo de carga:', pageLoadTime + 'ms');
    });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('✅ Copiado al portapapeles');
    });
}

// Validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Formatear teléfono
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

/* ========================================
   EXPORT API
   ======================================== */

window.ToxcityAPI = {
    copyToClipboard,
    isValidEmail,
    formatPhoneNumber,
    isMobileDevice,
    trackEvent
};

console.log('✅ Toxcity API disponible');
