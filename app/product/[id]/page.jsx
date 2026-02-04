"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import products from "@/data/productInfo";
import Header from "@/components/Header";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === id);
  // console.log(product);

  if (!product) {
    return <p className="p-4">Product not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-56">
          {/* Product Image */}
          <div className="bg-white p-4 rounded shadow">
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
          </div>

          {/* Product Details */}
          <div className="bg-blue-300 p-6 text-white rounded shadow">
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

            <p className="text-xl font-medium mb-4">₹{product.price}</p>

            <p className="text-gray-700 mb-4">{product.description}</p>

            <p className="text-lg mb-4">Category: {product.category}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <label className="text-sm font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 border px-2 py-1 rounded"
              />
            </div>

            {/* Add to Cart (logic later) */}
            <button className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
