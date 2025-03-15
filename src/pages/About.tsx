import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-serif mb-6"
            >
              Our ashesttire
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-gray-600"
            >
              <p>
                Founded in 2024, ashesattire represents the pinnacle of sophisticated fashion. Our commitment to timeless elegance and exceptional quality has made us a trusted name in luxury apparel.
              </p>
              <p>
                Each piece in our collection is carefully selected and crafted using the finest materials, ensuring both beauty and longevity. We believe in creating garments that transcend seasonal trends, becoming cherished parts of your wardrobe for years to come.
              </p>
              <p>
                Our dedication to craftsmanship and attention to detail reflects our understanding that true luxury lies in the perfect balance of form and function, tradition and innovation.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
              alt="ashesattire Store"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="font-serif text-xl mb-4">Quality</h3>
            <p className="text-gray-600">Only the finest materials and craftsmanship make it into our collection.</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="font-serif text-xl mb-4">Sustainability</h3>
            <p className="text-gray-600">Committed to ethical production and environmental responsibility.</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="font-serif text-xl mb-4">Service</h3>
            <p className="text-gray-600">Personal attention and expert guidance for every client.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}