import { motion } from 'framer-motion';
import { Sparkles, Camera, Palette, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive Animations',
    desc: 'Delightful motion crafted with care to make every interaction feel magical.'
  },
  {
    icon: Camera,
    title: 'Curated Galleries',
    desc: 'Premium, high-resolution cat photography showcased in beautiful layouts.'
  },
  {
    icon: Palette,
    title: 'Luxury Aesthetics',
    desc: 'A refined visual language with elegant gradients, glass, and gold accents.'
  },
  {
    icon: Heart,
    title: 'Purrsonal Profiles',
    desc: 'Create profiles for your cats and share their finest moments with the world.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-amber-500/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Premium Features
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Everything you need to build a luxurious feline presence on the web.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/0 via-amber-400/0 to-amber-500/0 group-hover:from-amber-300/10 group-hover:via-amber-400/10 group-hover:to-amber-500/10 transition" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 text-black shadow-lg">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
