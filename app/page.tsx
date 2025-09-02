"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, Star } from "lucide-react"
import { useState } from "react"
import BarberPole from "@/components/ui/barber-pole"

export default function BarberiaPage() {
  const [selectedService, setSelectedService] = useState<number>(0)

  const services = [
    {
      title: "Corte de Cabello",
      desc: "Desde cortes tradicionales hasta los estilos más modernos, nuestros barberos expertos te ayudarán a encontrar el look perfecto.",
      price: "15",
      img: "/professional-haircut-in-barbershop.png",
      alt: "Corte de Cabello",
    },
    {
      title: "Afeitado Clásico",
      desc: "Experimenta el lujo del afeitado tradicional con navaja, toallas calientes y productos premium.",
      price: "$20",
      img: "/traditional-wet-shave-with-straight-razor.png",
      alt: "Afeitado Clásico",
    },
    {
      title: "Arreglo de Barba",
      desc: "Mantén tu barba en perfectas condiciones con nuestro servicio de perfilado y cuidado especializado.",
      price: "$15",
      img: "/beard-trimming-and-styling-service.png",
      alt: "Arreglo de Barba",
    },
  ]

  return (
  <div className="min-h-screen bg-background">
  {/* Navigation */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center space-x-2">
              <img src="/losprieto-removebg-preview.png" alt="Los Prieto" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-heading font-bold text-white">los Prieto</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-3 md:space-x-5 mt-2 md:mt-0 mr-0 md:mr-5 w-full md:w-auto">
              <a href="#inicio" className="text-white hover:text-accent transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-white hover:text-accent transition-colors">
                Servicios
              </a>
              <a href="#quienes-somos" className="text-white hover:text-accent transition-colors">
                Quiénes Somos
              </a>
              <a href="#contacto" className="text-white hover:text-accent transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section id="inicio" className="relative min-h-[70vh] md:h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/87/ed/12/87ed1246e7a498f051e7d81b7670fa77.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>

  {/* Logo centered between background and text (shifted left and up) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 -translate-x-8 -translate-y-6 md:-translate-x-120 md:-translate-y-15">
          <img
            src="/losprieto-removebg-preview.png"
            alt="Los Prieto Logo"
            className="w-40 md:w-56 object-contain"
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-2 sm:px-4">
          <h2
            className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold mb-6"
            style={{ WebkitTextStroke: '0.6px rgba(0,0,0,0.85)', textShadow: '0 1px 0 rgba(0,0,0,0.6)' }}
          >
            Refleja tu mejor versión
          </h2>
          <p
            className="text-base sm:text-xl md:text-2xl mb-8 font-body"
            style={{ WebkitTextStroke: '0.4px rgba(0,0,0,0.85)', textShadow: '0 0.8px 0 rgba(0,0,0,0.5)' }}
          >
            Más de 20 años perfeccionando el arte del corte masculino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 bg-transparent transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Estampar+Impresos/@1.1535465,-76.6483907,3a,75y,315.45h,79.27t/data=!3m7!1e1!3m5!1s16BQ3byiVxB2TsFSoYycaw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.728562555112148%26panoid%3D16BQ3byiVxB2TsFSoYycaw%26yaw%3D315.45186891152366!7i13312!8i6656!4m12!1m5!8m4!1e3!2s110118923815491820644!3m1!1e1!3m5!1s0x8e28b29b752b1647:0x9e9fa6a2cbce7f14!8m2!3d1.1535331!4d-76.6484849!16s%2Fg%2F11nym5td2k?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D",
                  "_blank",
                )
              }
            >
              Cómo llegar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 bg-transparent transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contacto
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios profesionales para el cuidado masculino
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-card rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/professional-haircut-in-barbershop.png"
                    alt="Corte de Cabello"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-2xl">Corte de Cabello</CardTitle>
                <CardDescription>Cortes clásicos y modernos adaptados a tu estilo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">
                  Desde cortes tradicionales hasta los estilos más modernos, nuestros barberos expertos te ayudarán a
                  encontrar el look perfecto.
                </p>
                <p className="text-2xl font-bold text-accent">15 COP</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-card rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/traditional-wet-shave-with-straight-razor.png"
                    alt="Afeitado Clásico"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-2xl">Afeitado Clásico</CardTitle>
                <CardDescription>Afeitado tradicional con navaja y toallas calientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">
                  Experimenta el lujo del afeitado tradicional con navaja, toallas calientes y productos premium.
                </p>
                <p className="text-2xl font-bold text-accent">20 COP</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-card rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/beard-trimming-and-styling-service.png"
                    alt="Arreglo de Barba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-2xl">Arreglo de Barba</CardTitle>
                <CardDescription>Perfilado y cuidado profesional de barba</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">
                  Mantén tu barba en perfectas condiciones con nuestro servicio de perfilado y cuidado especializado.
                </p>
                <p className="text-2xl font-bold text-accent">15 COP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="quienes-somos" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Quiénes Somos</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Desde 2003, Barbería Clásica ha sido el destino preferido para hombres que buscan calidad y tradición en
                el cuidado personal. Nuestro equipo de barberos expertos combina técnicas tradicionales con las últimas
                tendencias.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Creemos que cada cliente merece una experiencia única y personalizada. Por eso, nos tomamos el tiempo
                necesario para entender tu estilo y preferencias, garantizando siempre resultados excepcionales.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center sm:justify-start">
                <div className="text-center min-w-[90px]">
                  <div className="text-xl sm:text-3xl font-bold text-accent">20+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center min-w-[90px]">
                  <div className="text-xl sm:text-3xl font-bold text-accent">5000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div className="text-center min-w-[90px]">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">5 Estrellas</div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <img
                src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t39.30808-6/244385444_888720245416230_1802748282292835083_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2t3foqt7mScQ7kNvwG8YcnW&_nc_oc=AdmaMsYDVq73PSA2tY_ivXnU4ycamso5gkcsz4zXE07zLGW1OdiOBnGVqz6TAnrdKuA&_nc_zt=23&_nc_ht=scontent.fvgz1-1.fna&_nc_gid=raqHmT6Vch0_A0Diei7Jmg&oh=00_AfVewk135tlJzeHFdO-Z1M2ok6VcLQ-QehrG55pH56pOhw&oe=68B9A3DC"
                alt="Nuestro equipo"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Contacta directamente con nuestros barberos expertos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-transparent text-foreground rounded-lg border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-transparent overflow-visible">
                  <img
                    src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t39.30808-6/475922408_3848102878669918_5404609849416359698_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oj0mX1Hv4EAQ7kNvwEWI8zJ&_nc_oc=AdmeITv0JvOgTfCOSLFGJn0fHTkzx2EkH9xjcjodB5dntnvruY8WdeCC-hWWimSmth8&_nc_zt=23&_nc_ht=scontent.fvgz1-1.fna&_nc_gid=YL8GvSH08S7_eF25EqvZfw&oh=00_AfVbfFovrZLdQURCkUC0QC1fq5_v6ya1tQ9n_tdnBbEsIg&oe=68B9A6E0"
                    alt="Luis Sandoval - Barbero Senior"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-xl text-center">Luis Sandoval</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 text-sm">
                  Especialista en cortes clásicos y modernos. Experto en técnicas tradicionales de barbería.
                </p>
                <Button
                  className="w-full sm:w-10/12 md:w-3/4 mx-auto bg-green-600 hover:bg-green-700 text-white py-2 flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://wa.me/573001234567?text=Hola%20Carlos,%20me%20gustaría%20agendar%20una%20cita",
                      "_blank",
                    )
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .01 5.36.01 12a11.74 11.74 0 0 0 2.42 7.31L0 24l4.93-1.61A11.77 11.77 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.5a9.5 9.5 0 0 1-4.83-1.32l-.35-.21L5 20l1.06-1.82-.22-.36A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5zM17.27 14.5c-.3-.15-1.77-.87-2.05-.97-.28-.11-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.6-.49-.52-.66-.53-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.81.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.46 5.18 4.84 3.04 1.39 3.04.93 3.59.87.55-.07 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.28-.2-.58-.35z" />
                  </svg>
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-foreground rounded-lg border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-transparent overflow-visible">
                  <img
                    src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t39.30808-1/376251674_1064459974930398_246935592878599603_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=xdC_mLYtbusQ7kNvwEJTr7I&_nc_oc=AdnNWjJHH1J7Csdzz0rBCZM1VLv3v0_Nb0AO1MiZ_Lp_OVLAnwA_xhtmM7_oauRvSTI&_nc_zt=24&_nc_ht=scontent.fvgz1-1.fna&_nc_gid=YbpvCMCNNt0OanYG6Kjb4g&oh=00_AfVtVzA4HWHlRv3-IbUBt6B7RIWkf_rG8ay64viQMc7V4A&oe=68B9A3B1"
                    alt="Leider Carabali - Especialista en Barba"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-xl text-center">Leider Carabali</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 text-sm">
                  Maestro en el arte del perfilado y cuidado de barba. Técnicas de afeitado tradicional.
                </p>
                <Button
                  className="w-full sm:w-10/12 md:w-3/4 mx-auto bg-green-600 hover:bg-green-700 text-white py-2 flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://wa.me/573007654321?text=Hola%20Miguel,%20me%20gustaría%20agendar%20una%20cita",
                      "_blank",
                    )
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .01 5.36.01 12a11.74 11.74 0 0 0 2.42 7.31L0 24l4.93-1.61A11.77 11.77 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.5a9.5 9.5 0 0 1-4.83-1.32l-.35-.21L5 20l1.06-1.82-.22-.36A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5zM17.27 14.5c-.3-.15-1.77-.87-2.05-.97-.28-.11-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.6-.49-.52-.66-.53-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.81.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.46 5.18 4.84 3.04 1.39 3.04.93 3.59.87.55-.07 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.28-.2-.58-.35z" />
                  </svg>
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-foreground rounded-lg border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-transparent overflow-visible">
                  <img
                    src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t39.30808-6/518343631_2948086412042658_3533930141440775693_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2W8T-V8qAvQQ7kNvwGajIGa&_nc_oc=Adl0eZ8sMKxzbln8x6pCHVbR-w0nAYYIz3GpRxct6nGGw0yhoF4s0vC30GOkHuJZ-PY&_nc_zt=23&_nc_ht=scontent.fvgz1-1.fna&_nc_gid=2XQVtUyq73tT7zNYsOCjsA&oh=00_AfU3g-WHO6IZz1A2_AmTPqUVT-b6UlomIVWKmRLbuic-UQ&oe=68B99A4E"
                    alt="Felix Serna - Cortes Modernos"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-xl text-center">Felix Serna</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 text-sm">
                  Experto en tendencias actuales y estilos juveniles. Cortes fade y diseños creativos.
                </p>
                <Button
                  className="w-full sm:w-10/12 md:w-3/4 mx-auto bg-green-600 hover:bg-green-700 text-white py-2 flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://wa.me/573009876543?text=Hola%20Andrés,%20me%20gustaría%20agendar%20una%20cita",
                      "_blank",
                    )
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .01 5.36.01 12a11.74 11.74 0 0 0 2.42 7.31L0 24l4.93-1.61A11.77 11.77 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.5a9.5 9.5 0 0 1-4.83-1.32l-.35-.21L5 20l1.06-1.82-.22-.36A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5zM17.27 14.5c-.3-.15-1.77-.87-2.05-.97-.28-.11-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.6-.49-.52-.66-.53-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.81.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.46 5.18 4.84 3.04 1.39 3.04.93 3.59.87.55-.07 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.28-.2-.58-.35z" />
                  </svg>
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-foreground rounded-lg border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-transparent overflow-visible">
                  <img
                    src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t1.6435-9/107817533_592173468404244_3517055720766901617_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NR6iNmUXAdoQ7kNvwEejv5D&_nc_oc=Adn52VMDXk8WKkkOLnFOpZhqmhQiz4ki2YiALKQXUEms9A9ET11GaUDq1sR8IuucVqc&_nc_zt=23&_nc_ht=scontent.fvgz1-1.fna&_nc_gid=mfEuBy2opWTZjhttR2VMWw&oh=00_AfXZMjEVf8zQLcYW7Xw6OKRAvc8ZL_6oDWSYUD1vvRtGRw&oe=68DB3455"
                    alt="Cryst Carabali"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-xl text-center">Cryst Carabali</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 text-sm">
                  Maestro del afeitado tradicional con navaja. Especialista en técnicas de barbería clásica.
                </p>
                <Button
                  className="w-full sm:w-10/12 md:w-3/4 mx-auto bg-green-600 hover:bg-green-700 text-white py-2 flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://wa.me/573005551234?text=Hola%20David,%20me%20gustaría%20agendar%20una%20cita",
                      "_blank",
                    )
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .01 5.36.01 12a11.74 11.74 0 0 0 2.42 7.31L0 24l4.93-1.61A11.77 11.77 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.5a9.5 9.5 0 0 1-4.83-1.32l-.35-.21L5 20l1.06-1.82-.22-.36A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5zM17.27 14.5c-.3-.15-1.77-.87-2.05-.97-.28-.11-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.25-.24-.6-.49-.52-.66-.53-.17-.01-.37-.01-.57-.01-.2 0-.53.07-.81.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.46 5.18 4.84 3.04 1.39 3.04.93 3.59.87.55-.07 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.28-.2-.58-.35z" />
                  </svg>
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="relative py-6">
            {/* connecting stripe behind cards */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {/* Card 1 */}
              <div className="flex items-center justify-center">
                <Card className="bg-transparent shadow-none border-0">
                  <CardContent className="p-6 flex flex-col items-center gap-4 bg-transparent">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center border border-black">
                      <MapPin className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Dirección</h3>
                    <p className="text-muted-foreground text-center">
                      Calle Principal 123
                      <br />
                      Centro, Ciudad
                      <br />
                      CP 12345
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 2 */}
              <div className="flex items-center justify-center">
                <Card className="bg-transparent shadow-none border-0">
                  <CardContent className="p-6 flex flex-col items-center gap-4 bg-transparent">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center border border-black">
                      <Phone className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Teléfono</h3>
                    <p className="text-muted-foreground text-center">+1 (555) 123-4567</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 3 */}
              <div className="flex items-center justify-center">
                <Card className="bg-transparent shadow-none border-0">
                  <CardContent className="p-6 flex flex-col items-center gap-4 bg-transparent">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center border border-black">
                      <Mail className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground text-center">info@barberiaclasica.com</p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 4 */}
              <div className="flex items-center justify-center">
                <Card className="bg-transparent shadow-none border-0">
                  <CardContent className="p-6 flex flex-col items-center gap-4 bg-transparent">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center border border-black">
                      <Clock className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Horarios</h3>
                    <div className="text-muted-foreground text-center space-y-1">
                      <p>Lun - Vie: 9:00 AM - 8:00 PM</p>
                      <p>Sáb: 8:00 AM - 6:00 PM</p>
                      <p>Dom: 10:00 AM - 4:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarberPole className="h-8 w-8" />
                <span className="text-2xl font-heading font-bold">Barbería Clásica</span>
              </div>
              <p className="text-primary-foreground/80">
                Tradición y calidad en cada corte. Tu barbería de confianza desde 2003.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#quienes-somos" className="hover:text-primary-foreground transition-colors">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <p className="text-primary-foreground/80 mb-4">
                Mantente al día con nuestras últimas novedades y promociones.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-primary-foreground/60 text-xs sm:text-sm">
            <p>&copy; 2024 Barbería Clásica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
