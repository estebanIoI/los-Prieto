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

export default nextConfig
