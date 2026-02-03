
const ProductCard = ({ product }) => {
    console.log(product);
    
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-md transition">
      {/* Product Image */}
      {/* <Link href={`/product/${product.id}`}> */}
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
      {/* </Link> */}

      {/* Product Title */}
      <h2 className="text-sm font-semibold text-gray-800 mb-1">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-gray-700 mb-3">${product.price}</p>

      {/* Add to Cart */}
      <button className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
