import { motion } from 'framer-motion';

const cats = [
  {
    name: 'Luna',
    img: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Milo',
    img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Nala',
    img: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Simba',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Cleo',
    img: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Felix',
    img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Royal Gallery
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A curated selection of the most majestic felines.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
            >
              <img src={cat.img} alt={cat.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold text-lg">{cat.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
