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

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Apple (AAPL) Financial Data</h1>
      <FilterPanel onFilterChange={handleFilterChange} />
      <SortPanel onSort={handleSort} />
      <DataTable data={filteredData} />
    </div>
  );
}

