import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic Wool Blazer',
    price: '$895',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80',
    category: 'Blazers'
  },
  {
    id: '2',
    name: 'Silk Evening Dress',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    category: 'Dresses'
  },
  {
    id: '3',
    name: 'Cashmere Sweater',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    category: 'Knitwear'
  },
  {
    id: '4',
    name: 'Tailored Trousers',
    price: '$595',
    image: 'https://images.unsplash.com/photo-1594938374182-a57061dac3df?auto=format&fit=crop&q=80',
    category: 'Trousers'
  },
  {
    id: '5',
    name: 'Pearl Necklace',
    price: '$2,800',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'Leather Handbag',
    price: '$1,895',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80',
    category: 'Accessories'
  }
];

export default function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-center mb-4">Our Collection</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our carefully curated selection of timeless pieces, crafted with the finest materials and attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="font-light">{product.price}</p>
      </div>
    </motion.div>
  );
}