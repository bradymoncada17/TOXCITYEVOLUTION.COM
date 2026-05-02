# Guía de Despliegue en GitHub Pages - Toxcity Evolution

## ✅ Proyecto Listo para GitHub Pages

Este proyecto es **100% compatible con GitHub Pages**. No requiere compilación, solo necesitas hacer push del código.

---

## 🚀 Pasos para Desplegar

### **PASO 1: Crear Repositorio en GitHub**

1. Ve a https://github.com/new
2. Completa los datos:
   - **Repository name**: `toxcity-web`
   - **Description**: Sitio web mayorista de camisetas
   - **Public**: Selecciona esta opción
3. **IMPORTANTE**: NO inicialices con README, .gitignore o licencia
4. Haz clic en **"Create repository"**

---

### **PASO 2: Conectar Repositorio Local**

Ejecuta estos comandos en tu terminal:

```bash
cd /home/ubuntu/toxcity-html

# Configurar git (si es la primera vez)
git config user.email "tu@email.com"
git config user.name "Tu Nombre"

# Agregar repositorio remoto
git remote add origin https://github.com/TU_USUARIO/toxcity-web.git

# Cambiar rama a main (ya está hecha)
git branch -M main

# Hacer push del código
git push -u origin main
```

**Reemplaza**:
- `tu@email.com` con tu email
- `Tu Nombre` con tu nombre
- `TU_USUARIO` con tu nombre de usuario de GitHub

---

### **PASO 3: Configurar GitHub Pages**

1. Ve a tu repositorio: `https://github.com/TU_USUARIO/toxcity-web`
2. Haz clic en **Settings** (Configuración)
3. En el menú izquierdo, selecciona **Pages**
4. En "Build and deployment":
   - **Source**: Selecciona **"Deploy from a branch"**
   - **Branch**: Selecciona **"main"** y **"/ (root)"**
   - Haz clic en **"Save"**

---

### **PASO 4: Verificar Despliegue**

1. Espera 1-2 minutos
2. Recarga la página de Settings → Pages
3. Verás un mensaje verde: "Your site is live at: https://TU_USUARIO.github.io/toxcity-web/"
4. Haz clic en el enlace para acceder a tu sitio

---

## 📋 Checklist de Despliegue

- [ ] Repositorio creado en GitHub
- [ ] Remoto agregado: `git remote add origin https://...`
- [ ] Rama es `main` (verificar con `git branch`)
- [ ] Código hecho push: `git push -u origin main`
- [ ] GitHub Pages configurado en Settings
- [ ] Source es "Deploy from a branch"
- [ ] Branch es "main" y "/ (root)"
- [ ] Sitio accesible en `https://TU_USUARIO.github.io/toxcity-web/`

---

## 🔍 Verificación

Después de hacer push, verifica que todo está correcto:

```bash
# Ver estado del repositorio
git status

# Ver remoto configurado
git remote -v

# Ver rama actual
git branch

# Ver últimos commits
git log --oneline | head -5
```

---

## 📝 Hacer Cambios Después del Despliegue

Para actualizar el sitio después de desplegarlo:

```bash
# 1. Edita los archivos (index.html, styles.css, script.js, etc.)

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de los cambios"

# 4. Hacer push
git push origin main
```

El sitio se actualizará automáticamente en 1-2 minutos.

---

## 🎯 Personalización Rápida

### Cambiar Número de WhatsApp

En `index.html`, busca `573001234567` y reemplaza con tu número:

```html
<!-- Antes -->
https://wa.me/573001234567?text=...

<!-- Después -->
https://wa.me/TU_NUMERO?text=...
```

**Formato**: `+57XXXXXXXXXX` (con código de país)

### Cambiar Colores

En `styles.css`, modifica:

```css
:root {
    --primary-color: #ff6b35;      /* Color naranja */
    --secondary-color: #1a1a1a;    /* Color negro */
}
```

### Cambiar Imágenes

Reemplaza estos archivos:
- `logo.png` - Logo de Toxcity
- `polo-hombre.png` - Imagen de polo
- `cuello-redondo-hombre.webp` - Imagen de cuello redondo
- `video-nino.mp4` - Video de demostración

---

## 🆘 Solución de Problemas

### El sitio no aparece después de hacer push

**Solución**:
1. Verifica que el repositorio sea **público**
2. Espera 2-3 minutos
3. Recarga la página
4. Limpia caché (Ctrl+Shift+Del)

### Error: "fatal: remote origin already exists"

**Solución**:
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/toxcity-web.git
```

### El sitio está en blanco

**Solución**:
1. Abre la consola del navegador (F12)
2. Revisa si hay errores de JavaScript
3. Verifica que todos los archivos se cargaron
4. Limpia caché y recarga

### Las imágenes no cargan

**Solución**:
1. Verifica que los archivos estén en el repositorio
2. Revisa que los nombres sean exactos (sensible a mayúsculas)
3. En `index.html`, verifica que las rutas sean correctas:
   ```html
   <img src="logo.png" alt="Logo">
   <img src="polo-hombre.png" alt="Polo">
   ```

### El formulario no envía a WhatsApp

**Solución**:
1. Verifica que el número de WhatsApp sea correcto
2. Asegúrate de incluir el código de país (+57)
3. Abre la consola (F12) para ver si hay errores

---

## 📊 Estructura del Proyecto

```
toxcity-html/
├── index.html                  # Página principal (282 líneas)
├── styles.css                  # Estilos (410 líneas)
├── script.js                   # JavaScript (155 líneas)
├── logo.png                    # Logo de Toxcity
├── polo-hombre.png             # Imagen de polo
├── cuello-redondo-hombre.webp  # Imagen de cuello redondo
├── video-nino.mp4              # Video de demostración
├── .gitignore                  # Archivos a ignorar
├── README.md                   # Documentación
└── DEPLOY_GITHUB_PAGES.md      # Esta guía
```

---

## 🌐 URL Final

Después de desplegar, tu sitio estará en:

```
https://TU_USUARIO.github.io/toxcity-web/
```

Ejemplo:
```
https://juanperez.github.io/toxcity-web/
```

---

## 📱 Características del Sitio

✅ Navbar con navegación y WhatsApp
✅ Hero Section con imagen y CTAs
✅ Sección de Ventajas (6 tarjetas)
✅ Catálogo de Productos con filtrado
✅ Formulario de Reserva de Cita
✅ Sección de Redes Sociales
✅ Footer con información de contacto
✅ Diseño responsivo (móvil, tablet, desktop)
✅ Animaciones suaves
✅ Integración WhatsApp en todo el sitio

---

## 🎨 Diseño

- **Colores**: Negro profesional con acentos naranja
- **Tipografía**: Segoe UI, Tahoma, Geneva, Verdana
- **Framework**: Bootstrap 5
- **Iconos**: Font Awesome 6
- **Animaciones**: CSS3 y JavaScript

---

## 🔒 Seguridad

✅ Sin base de datos
✅ Sin API keys expuestas
✅ Sin dependencias complejas
✅ Formularios seguros
✅ HTTPS automático en GitHub Pages

---

## 📞 Soporte

Si tienes problemas:

1. Revisa esta guía
2. Verifica los pasos del despliegue
3. Limpia caché y recarga
4. Abre la consola (F12) para ver errores
5. Contacta a Toxcity Evolution

---

## ✨ ¡Listo!

Tu sitio web está completamente configurado y listo para desplegar en GitHub Pages. Solo sigue los 4 pasos y tu sitio estará en vivo en minutos. 🚀

---

**Última actualización**: Mayo 2, 2026
**Versión**: 1.0
**Proyecto**: Toxcity Evolution S.A.S.
