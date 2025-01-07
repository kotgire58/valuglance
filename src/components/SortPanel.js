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
    <div className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Sort By</h2>
      <div className="flex flex-wrap gap-2">
        {['date', 'revenue', 'netIncome'].map(key => (
          <button
            key={key}
            onClick={() => handleSort(key)}
            className={`px-3 py-1 rounded ${
              sortStates[key] ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
            } hover:bg-blue-500 hover:text-white transition-colors`}
          >
            {getSortLabel(key)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortPanel;
