import { motion } from 'framer-motion';
import { Cat, Star, Crown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 text-black">
              <Cat size={20} />
            </span>
            <span className="font-semibold tracking-tight">The Cat Atelier</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black font-medium shadow-[0_10px_30px_-10px_rgba(234,179,8,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(234,179,8,0.7)] transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Crown size={18} /> Premium Club
          </motion.a>
        </div>
      </div>
      <div className="pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>
    </header>
  );
}
