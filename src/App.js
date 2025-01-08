import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import FilterPanel from './components/FilterPanel';
import SortPanel from './components/SortPanel';
import { fetchFinancialData } from './api/financialApi';

export default function App() {
  const [financialData, setFinancialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFinancialData();
        setFinancialData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleFilterChange = (filters) => {
    if (filters.startYear === 2020 &&
        filters.endYear === new Date().getFullYear() &&
        filters.minRevenue === 0 &&
        filters.maxRevenue === Infinity &&
        filters.minNetIncome === 0 &&
        filters.maxNetIncome === Infinity) {
      setFilteredData(financialData);
    } else {
      const filtered = financialData.filter(item => {
        const itemYear = new Date(item.date).getFullYear();
        return (
          itemYear >= filters.startYear &&
          itemYear <= filters.endYear &&
          item.revenue >= filters.minRevenue &&
          item.revenue <= filters.maxRevenue &&
          item.netIncome >= filters.minNetIncome &&
          item.netIncome <= filters.maxNetIncome
        );
      });
      setFilteredData(filtered);
    }
  };

  const handleSort = (key, direction) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (key === 'date') {
        return direction === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
    });
    setFilteredData(sorted);
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl font-semibold text-gray-700">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-2xl font-semibold text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Apple (AAPL) Financial Data</h1>
      <div className="space-y-6">
        <FilterPanel onFilterChange={handleFilterChange} />
        <SortPanel onSort={handleSort} />
        <DataTable data={filteredData} />
      </div>
    </div>
  );
}

