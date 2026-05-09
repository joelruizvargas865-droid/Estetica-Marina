import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const gradients = [
    "from-pink-100 to-rose-100",
    "from-purple-100 to-pink-100",
    "from-rose-100 to-orange-100",
    "from-amber-100 to-yellow-100",
    "from-fuchsia-100 to-pink-100",
    "from-pink-100 to-purple-100"
  ];

  const iconGradients = [
    "from-pink-400 to-rose-500",
    "from-purple-400 to-pink-500",
    "from-rose-400 to-orange-500",
    "from-amber-400 to-yellow-500",
    "from-fuchsia-400 to-pink-500",
    "from-pink-400 to-purple-500"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${iconGradients[index % iconGradients.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="mb-3 text-[--foreground]">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
