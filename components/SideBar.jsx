const Sidebar = () => {
  return (
    <aside className="bg-blue-800 p-4 rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-xl">Category</h3>
        <ul className="space-y-2 text-sm flex gap-2 flex-col text-sm ">
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Electronics
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Clothing
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Home
            </label>
          </li>
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-medium mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-full"
        />
        <div className="flex justify-between text-xs text-white mt-1">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
