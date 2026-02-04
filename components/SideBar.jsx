"use client";

const Sidebar = ({ category, setCategory, price, setPrice }) => {
  return (
    <div className="bg-blue-800 p-4 rounded shadow">
      <h2 className="font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <p className="font-medium mb-2">Category</p>

        <label className="block text-sm">
          <input
            type="radio"
            name="category"
            checked={category === "all"}
            onChange={() => setCategory("all")}
          />
          <span className="ml-2">All</span>
        </label>

        <label className="block text-sm">
          <input
            type="radio"
            name="category"
            checked={category === "electronics"}
            onChange={() => setCategory("electronics")}
          />
          <span className="ml-2">Electronics</span>
        </label>

        <label className="block text-sm">
          <input
            type="radio"
            name="category"
            checked={category === "clothing"}
            onChange={() => setCategory("clothing")}
          />
          <span className="ml-2">Clothing</span>
        </label>

        <label className="block text-sm">
          <input
            type="radio"
            name="category"
            checked={category === "home"}
            onChange={() => setCategory("home")}
          />
          <span className="ml-2">Home</span>
        </label>
      </div>

      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price</p>

        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />

        <p className="text-sm mt-1">Up to ₹{price}</p>
      </div>
    </div>
  );
};

export default Sidebar;
