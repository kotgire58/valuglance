import React from 'react';

const DataTable = ({ data }) => {
  if (data.length === 0) {
    return <div className="text-center mt-4">No data available</div>;
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue</th>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Net Income</th>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Gross Profit</th>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">EPS</th>
            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 whitespace-nowrap">{item.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">${item.revenue.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">${item.netIncome.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">${item.grossProfit.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">${item.eps.toFixed(2)}</td>
              <td className="px-4 py-2 whitespace-nowrap">${item.operatingIncome.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

