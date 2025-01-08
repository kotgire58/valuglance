import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    startYear: 2020,
    endYear: new Date().getFullYear(),
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

  const resetFilters = () => {
    const defaultFilters = {
      startYear: 2020,
      endYear: new Date().getFullYear(),
      minRevenue: 0,
      maxRevenue: Infinity,
      minNetIncome: 0,
      maxNetIncome: Infinity
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
          <input
            type="number"
            name="startYear"
            value={filters.startYear}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
          <input
            type="number"
            name="endYear"
            value={filters.endYear}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Revenue</label>
          <input
            type="number"
            name="minRevenue"
            value={filters.minRevenue}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Revenue</label>
          <input
            type="number"
            name="maxRevenue"
            value={filters.maxRevenue === Infinity ? '' : filters.maxRevenue}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Net Income</label>
          <input
            type="number"
            name="minNetIncome"
            value={filters.minNetIncome}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Net Income</label>
          <input
            type="number"
            name="maxNetIncome"
            value={filters.maxNetIncome === Infinity ? '' : filters.maxNetIncome}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={applyFilters}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;

