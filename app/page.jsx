import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/SideBar";
import products from "@/data/productInfo";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-25 justify-around w-full">

        {/* Sidebar */}
        <div className="w-[20%]">
          <Sidebar />
        </div>

        {/* Product Listing */}
        <div className="md:col-span-3 w-[75%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
