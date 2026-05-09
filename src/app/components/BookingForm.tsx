import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Calendar, Check } from "lucide-react";
import { motion } from "motion/react";

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-2xl border-2 border-green-200 text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="mb-2 text-green-700">¡Solicitud enviada!</h3>
        <p className="text-gray-600 text-lg">
          Te contactaremos pronto para confirmar tu cita.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-br from-white to-[--rose-pale]/20 rounded-3xl p-8 shadow-2xl border-2 border-[--rose-pale]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
          <Calendar className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-[--foreground]">Reserva tu cita</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-[--foreground]">
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full px-4 py-3 bg-white/80 border-2 border-[--rose-pale] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--rose-dark] focus:border-[--rose-dark] transition-all"
            placeholder="María García"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-[--foreground]">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: "El teléfono es obligatorio" })}
            className="w-full px-4 py-3 bg-white/80 border-2 border-[--rose-pale] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--rose-dark] focus:border-[--rose-dark] transition-all"
            placeholder="612 345 678"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block mb-2 text-[--foreground]">
            Servicio deseado
          </label>
          <select
            id="service"
            {...register("service", { required: "Selecciona un servicio" })}
            className="w-full px-4 py-3 bg-white/80 border-2 border-[--rose-pale] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--rose-dark] focus:border-[--rose-dark] transition-all"
          >
            <option value="">Selecciona un servicio</option>
            <option value="depilacion">Depilación</option>
            <option value="facial">Tratamiento Facial</option>
            <option value="capilar">Tratamiento Capilar con Oxígeno</option>
            <option value="masaje">Masajes Relajantes</option>
            <option value="manicura">Manicura y Pedicura</option>
            <option value="otro">Otro</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block mb-2 text-[--foreground]">
              Fecha preferida
            </label>
            <input
              id="date"
              type="date"
              {...register("date", { required: "La fecha es obligatoria" })}
              className="w-full px-4 py-3 bg-white/80 border-2 border-[--rose-pale] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--rose-dark] focus:border-[--rose-dark] transition-all"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block mb-2 text-[--foreground]">
              Hora preferida
            </label>
            <input
              id="time"
              type="time"
              {...register("time", { required: "La hora es obligatoria" })}
              className="w-full px-4 py-3 bg-white/80 border-2 border-[--rose-pale] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--rose-dark] focus:border-[--rose-dark] transition-all"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Solicitar cita
        </Button>
      </div>
    </form>
  );
}
