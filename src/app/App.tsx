import { motion } from "motion/react";
import { Sparkles, Phone, MapPin, Clock, Mail, Star, Droplet, Flower2, Wind, Heart } from "lucide-react";
import { Button } from "./components/Button";
import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { BookingForm } from "./components/BookingForm";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  const services = [
    {
      icon: Droplet,
      title: "Depilación",
      description: "Depilación profesional con las técnicas más avanzadas para una piel suave y cuidada. Tratamientos personalizados según tu tipo de piel."
    },
    {
      icon: Sparkles,
      title: "Tratamientos Faciales",
      description: "Revitaliza tu rostro con nuestros tratamientos faciales personalizados. Hidratación profunda, limpieza y rejuvenecimiento."
    },
    {
      icon: Wind,
      title: "Tratamiento Capilar con Oxígeno",
      description: "Innovadora terapia capilar con oxígeno puro que fortalece, nutre y revitaliza tu cabello desde la raíz."
    },
    {
      icon: Heart,
      title: "Masajes Relajantes",
      description: "Libera tensiones y encuentra el equilibrio perfecto con nuestros masajes relajantes y terapéuticos."
    },
    {
      icon: Flower2,
      title: "Manicura y Pedicura",
      description: "Cuida tus manos y pies con nuestros servicios profesionales de manicura y pedicura. Resultados impecables."
    },
    {
      icon: Sparkles,
      title: "Tratamientos Corporales",
      description: "Experimenta una transformación completa con nuestros tratamientos corporales diseñados para tu bienestar."
    }
  ];

  const testimonials = [
    {
      name: "Laura M.",
      rating: 5,
      comment: "Excelente profesionalidad y trato. Mariana es increíble, muy atenta y profesional. ¡Totalmente recomendable!"
    },
    {
      name: "Carmen R.",
      rating: 5,
      comment: "Llevo años viniendo y siempre salgo encantada. El trato es familiar y los resultados son excepcionales."
    },
    {
      name: "Ana S.",
      rating: 5,
      comment: "El mejor centro de estética de la zona. Cida es maravillosa y muy profesional. Los tratamientos faciales son increíbles."
    },
    {
      name: "María G.",
      rating: 5,
      comment: "Ambiente muy acogedor y limpio. Las chicas son super profesionales y atentas. Repetiremos sin duda."
    },
    {
      name: "Isabel P.",
      rating: 4,
      comment: "Muy buena experiencia. El tratamiento capilar con oxígeno me ha dejado el pelo renovado. Muy satisfecha."
    },
    {
      name: "Sofía L.",
      rating: 5,
      comment: "Profesionales de 10. Siempre consiguen que salga del centro sintiéndome renovada y feliz. ¡Gracias!"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[--background]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-md z-50 border-b border-[--border]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-gray-800 to-rose-700 bg-clip-text text-transparent">Estética Marina</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <button onClick={() => scrollToSection("servicios")} className="hidden md:block text-[--foreground] hover:text-rose-600 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection("resenas")} className="hidden md:block text-[--foreground] hover:text-rose-600 transition-colors">
                Reseñas
              </button>
              <button onClick={() => scrollToSection("contacto")} className="hidden md:block text-[--foreground] hover:text-rose-600 transition-colors">
                Contacto
              </button>
              <Button onClick={() => scrollToSection("reservar")} variant="primary" size="sm">
                Reservar Cita
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-5 py-3 rounded-full mb-6 shadow-md border border-amber-200">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                <span className="text-sm text-gray-800">4.7 ⭐ en Google (26 reseñas)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-800 via-rose-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                Tu belleza, nuestro compromiso
              </h1>
              <p className="text-lg text-[--muted-foreground] mb-8 leading-relaxed">
                Descubre un espacio dedicado a tu bienestar. Más de 20 años de experiencia en tratamientos de belleza personalizados en el corazón de L'Hospitalet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("reservar")} variant="primary" size="lg">
                  Reservar Cita
                </Button>
                <Button onClick={() => scrollToSection("servicios")} variant="outline" size="lg">
                  Ver Servicios
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden ring-4 ring-pink-200/50">
                <img
                  src="https://images.unsplash.com/photo-1630595271375-5073a6c0638b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Spa relaxante"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-2xl border-2 border-pink-200">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Clientes satisfechas</p>
                    <p className="text-3xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">1000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[--rose-pale]/30 to-[--background]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700 bg-clip-text text-transparent">Nuestros Servicios</h2>
            <p className="text-lg text-[--muted-foreground] max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos de belleza y bienestar, personalizados para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* Service Images Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-pink-200/50 cursor-pointer"
            >
              <div className="relative w-full h-full group">
                <img
                  src="https://images.unsplash.com/photo-1775133263816-8b2a1c5d13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tratamiento facial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">Tratamientos faciales</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-purple-200/50 cursor-pointer"
            >
              <div className="relative w-full h-full group">
                <img
                  src="https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiZWF1dHklMjBzYWxvbiUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mascarilla facial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">Mascarillas especiales</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-rose-200/50 cursor-pointer"
            >
              <div className="relative w-full h-full group">
                <img
                  src="https://images.unsplash.com/photo-1677682693087-711e24efaa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjB3ZWxsbmVzcyUyMG1hc3NhZ2V8ZW58MXx8fHwxNzc4MzQxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Masajes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">Masajes relajantes</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-amber-200/50 cursor-pointer"
            >
              <div className="relative w-full h-full group">
                <img
                  src="https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ambiente spa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">Ambiente relajante</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="resenas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-pink-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">Lo que dicen nuestras clientas</h2>
            <p className="text-lg text-[--muted-foreground] max-w-2xl mx-auto">
              La satisfacción de nuestras clientas es nuestro mayor orgullo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="reservar" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-orange-700 via-rose-700 to-pink-700 bg-clip-text text-transparent">Reserva tu cita</h2>
            <p className="text-lg text-[--muted-foreground]">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[--rose-pale]/40 via-[--background] to-[--rose-pale]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-rose-700 via-pink-700 to-purple-700 bg-clip-text text-transparent">Sobre Nosotros</h2>
              <p className="text-lg text-[--muted-foreground] leading-relaxed mb-6">
                En <strong className="text-[--rose-dark]">Estética Marina</strong>, llevamos más de 20 años dedicados al cuidado de la belleza y el bienestar de nuestras clientas. Nuestro equipo, liderado por Mariana y Cida, combina experiencia, profesionalidad y pasión por lo que hacemos.
              </p>
              <p className="text-lg text-[--muted-foreground] leading-relaxed mb-8">
                Nos especializamos en tratamientos personalizados, utilizando las técnicas más avanzadas y productos de la más alta calidad. Tu satisfacción y bienestar son nuestra prioridad.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Clientas felices</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">4.7⭐</div>
                  <div className="text-sm text-gray-600">Valoración</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pink-200/50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1761718209794-e0588aafbcc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxiZWF1dHklMjBzYWxvbiUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tratamientos profesionales"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-2 ring-purple-200/50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1700522924565-9fad1c05469e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjB3ZWxsbmVzcyUyMG1hc3NhZ2V8ZW58MXx8fHwxNzc4MzQxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Ambiente relajante"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-2 ring-rose-200/50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1775133163619-219dff93bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NzgzNDE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cuidado personalizado"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-amber-200/50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1741934023052-26baf5535088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8YmVhdXR5JTIwc2Fsb24lMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzc4MzQxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Experiencia profesional"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[--rose-pale]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Visítanos</h2>
            <p className="text-lg text-[--muted-foreground]">
              Estamos en el corazón de L'Hospitalet de Llobregat, Barcelona.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[--foreground]">Dirección</h3>
                    <p className="text-gray-600">
                      Rambla de la Marina, 241<br />
                      08907 L'Hospitalet de Llobregat<br />
                      Barcelona
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[--foreground]">Teléfono</h3>
                    <a href="tel:932634090" className="text-rose-600 hover:text-rose-700 text-xl transition-colors">
                      932 63 40 90
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[--foreground]">Horario</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:30h - 20:00h<br />
                      Sábados: 10:00h - 14:00h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[--foreground]">Web</h3>
                    <a href="https://marinaestetica.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      marinaestetica.es
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0516583838743!2d2.1067088156834786!3d41.36107607926756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f7e7f7e7e7%3A0x7f7f7f7f7f7f7f7f!2sRambla%20de%20la%20Marina%2C%20241%2C%2008907%20L&#39;Hospitalet%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Estética Marina"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 via-[--foreground] to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Flower2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">Estética Marina</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tu centro de estética de confianza en L'Hospitalet. Profesionalidad, calidad y resultados garantizados.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("servicios")} className="text-gray-300 hover:text-[--rose-medium] transition-colors">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("resenas")} className="text-gray-300 hover:text-[--rose-medium] transition-colors">
                    Reseñas
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("reservar")} className="text-gray-300 hover:text-[--rose-medium] transition-colors">
                    Reservar Cita
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contacto")} className="text-gray-300 hover:text-[--rose-medium] transition-colors">
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Rambla de la Marina, 241</li>
                <li>08907 L'Hospitalet, Barcelona</li>
                <li>
                  <a href="tel:932634090" className="hover:text-[--rose-medium] transition-colors">
                    932 63 40 90
                  </a>
                </li>
                <li>
                  <a href="https://marinaestetica.es" target="_blank" rel="noopener noreferrer" className="hover:text-[--rose-medium] transition-colors">
                    marinaestetica.es
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Estética Marina. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}