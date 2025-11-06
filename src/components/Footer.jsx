import { motion } from 'framer-motion';
import { Cat, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 text-black">
                <Cat size={20} />
              </span>
              <span className="font-semibold tracking-tight">The Cat Atelier</span>
            </div>
            <p className="mt-3 text-white/70 max-w-sm">
              A premium, animated experience celebrating the elegance and charm of cats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition">
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} The Cat Atelier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
