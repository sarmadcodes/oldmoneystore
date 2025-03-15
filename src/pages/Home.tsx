import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Timeless Elegance
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl mb-8"
            >
              Discover our curated collection of sophisticated apparel
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="/collection"
                className="inline-flex items-center px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Explore Collection <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              image="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80"
              title="Tailored Suits"
              link="/collection/suits"
            />
            <CategoryCard
              image="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80"
              title="Classic Dresses"
              link="/collection/dresses"
            />
            <CategoryCard
              image="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80"
              title="Accessories"
              link="/collection/accessories"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ image, title, link }: { image: string; title: string; link: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative h-96 group"
    >
      <Link to={link}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-2xl font-serif">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}