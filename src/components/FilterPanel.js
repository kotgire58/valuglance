import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    startYear: 2020,
    endYear: 2024,
    minRevenue: 0,
    maxRevenue: Infinity,
    minNetIncome: 0,
    maxNetIncome: Infinity
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value === '' ? (name.startsWith('max') ? Infinity : 0) : Number(value)
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">Start Year</label>
          <input
            type="number"
            name="startYear"
            value={filters.startYear}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">End Year</label>
          <input
            type="number"
            name="endYear"
            value={filters.endYear}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Min Revenue</label>
          <input
            type="number"
            name="minRevenue"
            value={filters.minRevenue}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Max Revenue</label>
          <input
            type="number"
            name="maxRevenue"
            value={filters.maxRevenue === Infinity ? '' : filters.maxRevenue}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Min Net Income</label>
          <input
            type="number"
            name="minNetIncome"
            value={filters.minNetIncome}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Max Net Income</label>
          <input
            type="number"
            name="maxNetIncome"
            value={filters.maxNetIncome === Infinity ? '' : filters.maxNetIncome}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        onClick={applyFilters}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;

