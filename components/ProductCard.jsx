import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-md transition">
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-65">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </Link>

      {/* Product Title */}
      <h2 className="text-sm font-semibold text-gray-800 mb-1">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-gray-700 mb-3">${product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
