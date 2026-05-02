# Toxcity Evolution - Sitio Web

## 🎯 Descripción

Sitio web profesional para **Toxcity Evolution S.A.S.**, empresa mayorista de camisetas para hombre y niño (marca D'Monk).

Construido con **HTML5, Bootstrap 5 y JavaScript vanilla** - 100% compatible con GitHub Pages sin necesidad de compilación.

## ✨ Características

- ✅ Diseño responsivo y moderno
- ✅ Catálogo de productos con filtrado
- ✅ Integración directa con WhatsApp
- ✅ Formulario de reserva de cita
- ✅ Animaciones suaves
- ✅ Rápido y ligero (sin dependencias complejas)
- ✅ Compatible con todos los navegadores
- ✅ Despliegue automático en GitHub Pages

## 📁 Estructura

```
toxcity-html/
├── index.html              # Página principal
├── styles.css              # Estilos personalizados
├── script.js               # Interactividad
├── logo.png                # Logo de Toxcity
├── polo-hombre.png         # Imagen de polo
├── cuello-redondo-hombre.webp  # Imagen de cuello redondo
├── video-nino.mp4          # Video de demostración
├── .gitignore              # Archivos a ignorar
└── README.md               # Este archivo
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `toxcity-web`
3. **NO** inicialices con README, .gitignore o licencia
4. Clic en "Create repository"

### Paso 2: Conectar Repositorio Local

```bash
cd /home/ubuntu/toxcity-html

# Configurar git
git config user.email "tu@email.com"
git config user.name "Tu Nombre"

# Agregar remoto
git remote add origin https://github.com/TU_USUARIO/toxcity-web.git

# Cambiar rama a main
git branch -M main

# Hacer push
git push -u origin main
```

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio: `https://github.com/TU_USUARIO/toxcity-web`
2. **Settings** → **Pages**
3. En "Build and deployment":
   - **Source**: Selecciona **"Deploy from a branch"**
   - **Branch**: Selecciona **"main"** y **"/ (root)"**
   - Haz clic en **"Save"**

### Paso 4: Verificar Despliegue

1. Espera 1-2 minutos
2. Tu sitio estará en: `https://TU_USUARIO.github.io/toxcity-web/`

## 🔧 Personalización

### Cambiar Número de WhatsApp

Busca `573001234567` en los siguientes archivos y reemplaza con tu número:
- `index.html` (múltiples ubicaciones)

Formato: `+57XXXXXXXXXX` (con código de país)

### Cambiar Información de Contacto

En `index.html`:
- Email: busca `info@toxcity.com`
- Teléfono: busca `+57 300 123 4567`

### Cambiar Colores

En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #ff6b35;      /* Color naranja */
    --secondary-color: #1a1a1a;    /* Color negro */
    --light-color: #f8f9fa;        /* Color claro */
    --dark-color: #212529;         /* Color oscuro */
}
```

### Cambiar Imágenes

Reemplaza los archivos:
- `logo.png` - Logo de Toxcity
- `polo-hombre.png` - Imagen de polo
- `cuello-redondo-hombre.webp` - Imagen de cuello redondo
- `video-nino.mp4` - Video de demostración

## 📱 Secciones del Sitio

### 1. Navbar
- Logo y nombre de empresa
- Navegación principal
- Botón de WhatsApp

### 2. Hero Section
- Presentación principal
- Imagen destacada
- Botones de CTA

### 3. Ventajas
- 6 tarjetas con beneficios
- Iconos atractivos
- Animaciones al hover

### 4. Productos
- Filtrado por categoría
- Galería de productos
- Botones de WhatsApp por producto

### 5. Contacto
- Formulario de reserva de cita
- Envío directo a WhatsApp
- Validación de campos

### 6. Redes Sociales
- Enlaces a Instagram, TikTok, WhatsApp
- Botones circulares

### 7. Footer
- Información de empresa
- Enlaces rápidos
- Datos de contacto

## 🎨 Diseño

- **Paleta de Colores**: Negro profesional con acentos naranja
- **Tipografía**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Animaciones**: Suaves transiciones y efectos hover
- **Responsive**: Optimizado para móvil, tablet y desktop

## 📊 Funcionalidades

### Filtrado de Productos
- Todos
- Para Hombre
- Para Niño

### Formulario de Contacto
- Nombre completo
- Email
- Teléfono
- Nombre del negocio
- Fecha preferida
- Mensaje adicional
- Envío automático a WhatsApp

### Integración WhatsApp
- Botones en navbar
- Botones en hero section
- Botones en cada producto
- Formulario con mensaje pre-llenado

## 🌐 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Navegadores móviles

## 📈 SEO

- Meta tags completos
- Estructura semántica HTML5
- Títulos descriptivos
- Alt text en imágenes

## 🔒 Seguridad

- Sin dependencias externas complejas
- Sin base de datos
- Sin API keys expuestas
- Formularios seguros

## 📝 Cambios Después del Despliegue

Para actualizar el sitio después de desplegarlo:

```bash
# 1. Hacer cambios en los archivos
# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de cambios"

# 4. Hacer push
git push origin main
```

El sitio se actualizará automáticamente en 1-2 minutos.

## 🆘 Solución de Problemas

### El sitio no se ve
- Limpia caché (Ctrl+Shift+Del)
- Espera 2 minutos
- Recarga la página

### Las imágenes no cargan
- Verifica que los archivos estén en el repositorio
- Revisa los nombres de archivos (sensible a mayúsculas)

### El formulario no funciona
- Verifica que el número de WhatsApp sea correcto
- Asegúrate de incluir el código de país (+57)

### El sitio está lento
- Comprime las imágenes
- Optimiza los videos
- Usa formatos modernos (WebP)

## 📞 Contacto

**Toxcity Evolution S.A.S.**
- 📱 WhatsApp: +57 300 123 4567
- 📧 Email: info@toxcity.com
- 🌐 Sitio: https://tu-usuario.github.io/toxcity-web/

## 📄 Licencia

© 2026 Toxcity Evolution S.A.S. Todos los derechos reservados.

## 🙏 Créditos

- Bootstrap 5 - Framework CSS
- Font Awesome - Iconos
- Google Fonts - Tipografía

---

**¡Listo para desplegar!** 🚀
