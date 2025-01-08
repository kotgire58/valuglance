import React, { useState } from 'react';

const SortPanel = ({ onSort }) => {
  const [sortStates, setSortStates] = useState({
    date: '',
    revenue: '',
    netIncome: ''
  });

  const handleSort = (key) => {
    const nextState = sortStates[key] === 'asc' ? 'desc' : 'asc';
    setSortStates(prev => ({ ...prev, [key]: nextState }));
    onSort(key, nextState);
  };

  const getSortLabel = (key) => {
    const baseLabel = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    switch (sortStates[key]) {
      case 'asc':
        return `${baseLabel} ↑`;
      case 'desc':
        return `${baseLabel} ↓`;
      default:
        return baseLabel;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sort By</h2>
      <div className="flex flex-wrap gap-2">
        {['date', 'revenue', 'netIncome'].map(key => (
          <button
            key={key}
            onClick={() => handleSort(key)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              sortStates[key]
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              sortStates[key] ? 'focus:ring-blue-500' : 'focus:ring-gray-500'
            }`}
          >
            {getSortLabel(key)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortPanel;

