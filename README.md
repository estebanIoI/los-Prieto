# Barbería Los Prieto 💈

## 📋 Descripción del Proyecto

**Los Prieto** es una barbería tradicional con más de 20 años de experiencia, especializada en el arte del corte masculino. Esta es una página web moderna y responsiva que combina tradición y calidad en cada servicio.

### 🎯 Características Principales

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Interfaz Moderna**: Diseño elegante con componentes UI modernos
- **Navegación Suave**: Scroll suave entre secciones
- **Contacto Directo**: Enlaces directos a WhatsApp de cada barbero
- **Galería Visual**: Imágenes profesionales de servicios y equipo

## 🏪 Información de la Barbería

### 📍 Ubicación
- **Dirección**: Calle Principal 123, Ciudad
- **Teléfono**: +57 300 123 4567
- **Email**: info@losprieto.com

### ⏰ Horarios de Atención
- **Lunes a Viernes**: 9:00 AM - 8:00 PM
- **Sábados**: 8:00 AM - 6:00 PM
- **Domingos**: 10:00 AM - 4:00 PM

### 💰 Servicios y Precios

| Servicio | Descripción | Precio |
|----------|-------------|--------|
| **Corte de Cabello** | Cortes clásicos y modernos adaptados a tu estilo | $15 COP |
| **Afeitado Clásico** | Afeitado tradicional con navaja y toallas calientes | $20 COP |
| **Arreglo de Barba** | Perfilado y cuidado profesional de barba | $15 COP |

### 👥 Nuestro Equipo de Barberos

#### Luis Sandoval - Barbero Senior
- **Especialidad**: Cortes clásicos y modernos
- **Experiencia**: Experto en técnicas tradicionales de barbería
- **WhatsApp**: [+57 300 123 4567](https://wa.me/573001234567?text=Hola%20Carlos,%20me%20gustaría%20agendar%20una%20cita)

#### Leider Carabali - Especialista en Barba
- **Especialidad**: Perfilado y cuidado de barba
- **Experiencia**: Técnicas de afeitado tradicional
- **WhatsApp**: [+57 300 765 4321](https://wa.me/573007654321?text=Hola%20Miguel,%20me%20gustaría%20agendar%20una%20cita)

#### Felix Serna - Cortes Modernos
- **Especialidad**: Tendencias actuales y estilos juveniles
- **Experiencia**: Cortes fade y diseños creativos
- **WhatsApp**: [+57 300 987 6543](https://wa.me/573009876543?text=Hola%20Andrés,%20me%20gustaría%20agendar%20una%20cita)

#### Cryst Carabali - Maestro del Afeitado
- **Especialidad**: Afeitado tradicional con navaja
- **Experiencia**: Especialista en técnicas de barbería clásica
- **WhatsApp**: [+57 300 555 1234](https://wa.me/573005551234?text=Hola%20David,%20me%20gustaría%20agendar%20una%20cita)

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Icons**: Lucide React
- **Typography**: Geist Font
- **Form Handling**: React Hook Form
- **Animations**: CSS Transitions + Transform

## 📱 Estructura de la Página

### Secciones Principales:

1. **Hero Section** (`#inicio`)
   - Logo prominente de "Los Prieto"
   - Slogan: "Refleja tu mejor versión"
   - Botones CTA para ubicación y contacto

2. **Servicios** (`#servicios`)
   - Cards interactivas con hover effects
   - Imágenes y descripción de cada servicio
   - Precios claramente marcados

3. **Quiénes Somos** (`#quienes-somos`)
   - Historia de la barbería (desde 2003)
   - Estadísticas: 20+ años, 5000+ clientes, 5 estrellas
   - Imagen del equipo

4. **Contacto** (`#contacto`)
   - Cards individuales de cada barbero
   - Enlaces directos a WhatsApp
   - Información de ubicación y horarios

5. **Footer**
   - Enlaces rápidos
   - Redes sociales
   - Copyright

## 🚀 Conversión a HTML Estático para GitHub Pages

### Pasos para Crear una Versión Estática:

#### 1. **Exportar el Proyecto Next.js**

Agrega a `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

Configura `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

#### 2. **Comandos para Generar la Versión Estática**

```bash
# Instalar dependencias
npm install

# Generar build estático
npm run build

# El contenido estático estará en la carpeta 'out/'
```

#### 3. **Estructura de Archivos para GitHub Pages**

```
/
├── index.html              # Página principal generada
├── _next/                  # Assets de Next.js
├── public/                 # Imágenes y recursos
│   ├── losprieto-removebg-preview.png
│   ├── professional-haircut-in-barbershop.png
│   ├── traditional-wet-shave-with-straight-razor.png
│   └── beard-trimming-and-styling-service.png
└── 404.html               # Página de error
```

#### 4. **Configuración de GitHub Pages**

1. **Subir archivos**: Copiar el contenido de la carpeta `out/` a tu repositorio
2. **Configurar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
3. **Acceder**: Tu sitio estará en `https://[username].github.io/[repository-name]`

### 📋 Lista de Archivos de Imágenes Necesarios

```
public/
├── losprieto-removebg-preview.png           # Logo principal
├── professional-haircut-in-barbershop.png   # Servicio: Corte
├── traditional-wet-shave-with-straight-razor.png # Servicio: Afeitado
├── beard-trimming-and-styling-service.png   # Servicio: Barba
└── placeholder-user.jpg                     # Imagen por defecto
```

### 🔧 Optimizaciones para GitHub Pages

#### 1. **Base Path Configuration**
Si tu repositorio no está en la raíz, ajusta en `next.config.mjs`:
```javascript
const nextConfig = {
  basePath: '/nombre-repositorio',
  assetPrefix: '/nombre-repositorio/'
}
```

#### 2. **Meta Tags SEO**
```html
<meta name="description" content="Barbería Los Prieto - Más de 20 años perfeccionando el arte del corte masculino">
<meta name="keywords" content="barbería, corte de pelo, afeitado, barba, Los Prieto">
<meta property="og:title" content="Barbería Los Prieto - Tradición y Calidad">
<meta property="og:description" content="Refleja tu mejor versión con nuestros servicios profesionales">
```

#### 3. **Performance Optimizations**
- Imágenes optimizadas para web
- CSS minificado
- JavaScript comprimido
- Lazy loading implementado

## 📞 Contacto y Reservas

### Agendar Cita por WhatsApp:
- **Luis Sandoval**: [+57 300 123 4567](https://wa.me/573001234567)
- **Leider Carabali**: [+57 300 765 4321](https://wa.me/573007654321)
- **Felix Serna**: [+57 300 987 6543](https://wa.me/573009876543)
- **Cryst Carabali**: [+57 300 555 1234](https://wa.me/573005551234)

### 🗺️ Ubicación
[Ver en Google Maps](https://www.google.com/maps/place/Estampar+Impresos/@1.1535465,-76.6483907)

## 📄 Licencia

© 2024 Barbería Los Prieto. Todos los derechos reservados.

---

## 🚀 Deploy Rápido

### Para GitHub Pages:

1. **Clona este repositorio**
2. **Ejecuta el build**:
   ```bash
   npm install
   npm run build
   ```
3. **Copia el contenido de `out/` a tu repositorio de GitHub Pages**
4. **Activa GitHub Pages en la configuración del repositorio**

### Recursos Adicionales:

- [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuración de Dominio Personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

> **¡Refleja tu mejor versión con Los Prieto!** 💈✨
