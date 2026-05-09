import { motion } from "motion/react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  index: number;
}

export function TestimonialCard({ name, rating, comment, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-white to-[--rose-pale]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[--rose-pale]"
    >
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-[--foreground] mb-4 italic leading-relaxed text-base">"{comment}"</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[--rose-medium] to-[--rose-dark] rounded-full flex items-center justify-center">
          <span className="text-white text-sm">{name.charAt(0)}</span>
        </div>
        <p className="text-sm text-[--rose-dark]">{name}</p>
      </div>
    </motion.div>
  );
}
