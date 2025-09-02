# 🚀 Guía de Deployment - GitHub Pages

## Pasos para Desplegar la Barbería Los Prieto en GitHub Pages

### 📋 Prerrequisitos

1. **Node.js** instalado (versión 18 o superior)
2. **Git** instalado
3. **Cuenta de GitHub**
4. **Repositorio de GitHub** creado

---

### 🛠️ Paso 1: Preparar el Proyecto

#### 1.1 Verificar Configuración

Asegúrate de que `next.config.mjs` tenga esta configuración:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración para exportación estática (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  // Si tu repositorio no está en la raíz, descomenta las siguientes líneas:
  // basePath: '/nombre-de-tu-repositorio',
  // assetPrefix: '/nombre-de-tu-repositorio/',
}
```

#### 1.2 Verificar Scripts en package.json

```json
{
  "scripts": {
    "build": "next build",
    "dev": "next dev", 
    "lint": "next lint",
    "start": "next start",
    "export": "next build",
    "deploy": "npm run export && echo 'Build completo!'"
  }
}
```

---

### 🔨 Paso 2: Generar el Build Estático

#### 2.1 Instalar Dependencias

```bash
npm install
```

#### 2.2 Generar Build

```bash
npm run export
```

Este comando creará una carpeta `out/` con todos los archivos estáticos.

---

### 📁 Paso 3: Estructura de Archivos Generados

Después del build, tendrás esta estructura en la carpeta `out/`:

```
out/
├── index.html                    # Página principal
├── 404.html                     # Página de error
├── _next/                       # Assets de Next.js
│   ├── static/
│   └── ...
└── public/                      # Imágenes y recursos estáticos
    ├── losprieto-removebg-preview.png
    ├── professional-haircut-in-barbershop.png
    ├── traditional-wet-shave-with-straight-razor.png
    └── beard-trimming-and-styling-service.png
```

---

### 🌐 Paso 4: Deployment en GitHub Pages

#### Opción A: Repositorio Personal (username.github.io)

1. **Crear repositorio** con el nombre `[tu-username].github.io`
2. **Copiar archivos** de la carpeta `out/` al repositorio
3. **Push al repositorio**:
   ```bash
   git add .
   git commit -m "Deploy Barbería Los Prieto"
   git push origin main
   ```
4. **Acceder**: `https://[tu-username].github.io`

#### Opción B: Repositorio de Proyecto

1. **Crear repositorio** con cualquier nombre (ej: `barberia-los-prieto`)
2. **Configurar basePath** en `next.config.mjs`:
   ```javascript
   basePath: '/barberia-los-prieto',
   assetPrefix: '/barberia-los-prieto/',
   ```
3. **Regenerar build**:
   ```bash
   npm run export
   ```
4. **Copiar archivos** de `out/` al repositorio
5. **Configurar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
6. **Acceder**: `https://[tu-username].github.io/barberia-los-prieto`

---

### ⚙️ Paso 5: Configuración de GitHub Pages

#### 5.1 En GitHub Repository Settings

1. Ve a **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` (o `master`)
4. **Folder**: `/ (root)`
5. Click **Save**

#### 5.2 Custom Domain (Opcional)

Si tienes un dominio personalizado:

1. En Settings → Pages → Custom domain
2. Ingresa tu dominio: `www.losprieto.com`
3. Crea archivo `CNAME` en la raíz con tu dominio

---

### 🔧 Paso 6: Configuraciones Adicionales

#### 6.1 Archivo .nojekyll

Crea un archivo `.nojekyll` vacío en la raíz para evitar problemas con Jekyll:

```bash
echo "" > .nojekyll
```

#### 6.2 Archivo 404.html Personalizado

GitHub Pages usará automáticamente el `404.html` generado por Next.js.

---

### 📱 Paso 7: Verificación y Testing

#### 7.1 Verificar que funcione localmente

```bash
# Instalar servidor local
npm install -g serve

# Servir la carpeta out
serve out

# Abrir http://localhost:3000
```

#### 7.2 Verificar en GitHub Pages

1. **Esperar** 5-10 minutos después del push
2. **Revisar** la pestaña "Actions" para ver el deployment
3. **Acceder** a tu URL de GitHub Pages

---

### 🐛 Troubleshooting

#### Problema: Imágenes no cargan

**Solución**: Verificar que las rutas sean relativas y que las imágenes estén en `public/`.

#### Problema: CSS no aplica

**Solución**: Asegurarse de que `basePath` esté configurado correctamente.

#### Problema: JavaScript no funciona

**Solución**: Verificar que `assetPrefix` coincida con `basePath`.

#### Problema: Enlaces rotos

**Solución**: Usar rutas relativas en lugar de absolutas.

---

### ✅ Checklist Final

- [ ] `next.config.mjs` configurado para exportación
- [ ] Scripts de build agregados a `package.json`
- [ ] Build generado exitosamente (`npm run export`)
- [ ] Archivos copiados al repositorio de GitHub
- [ ] GitHub Pages configurado en Settings
- [ ] Sitio accesible en la URL de GitHub Pages
- [ ] Todas las imágenes y enlaces funcionando
- [ ] Responsive design verificado en móvil
- [ ] WhatsApp links funcionando
- [ ] Google Maps link funcionando

---

### 🔄 Actualizaciones Futuras

Para actualizar el sitio:

1. **Hacer cambios** en el código
2. **Regenerar build**: `npm run export`
3. **Copiar archivos** actualizados a GitHub
4. **Push cambios**: `git push origin main`
5. **Esperar** deployment automático (5-10 min)

---

### 📞 Soporte

Si tienes problemas:

1. **Revisar** la pestaña "Actions" en GitHub
2. **Verificar** logs de deployment
3. **Consultar** documentación de GitHub Pages
4. **Probar** localmente con `serve out/`

---

> **¡Tu barbería estará online en pocos minutos!** 💈✨

### Enlaces Útiles

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
