"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/SideBar";
import products from "@/data/productInfo";
import Header from "@/components/Header";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);
  const [search, setSearch] = useState("");

  useEffect(() => {
  const c = searchParams.get("category");
  const p = searchParams.get("price");
  const s = searchParams.get("search");

  setCategory(c || "all");
  setPrice(p ? Number(p) : 1000);
  setSearch(s || "");

}, []);
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (category !== "all") params.set("category", category);
    if (price !== 1000) params.set("price", price);
    if (search) params.set("search", search);

    router.push("/?" + params.toString());
  }, [category, price, search]);
  // Filter products
  const filteredProducts = products.filter((item) => {
    const matchCategory = category === "all" || item.category === category;

    const matchPrice = item.price <= price;

    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchPrice && matchSearch;
  });
  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Sidebar
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
            />
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
