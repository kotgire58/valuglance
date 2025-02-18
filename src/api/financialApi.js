import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`;

export const fetchFinancialData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map(item => ({
      date: item.date,
      revenue: item.revenue,
      netIncome: item.netIncome,
      grossProfit: item.grossProfit,
      eps: item.eps,
      operatingIncome: item.operatingIncome
    }));
  } catch (error) {
    console.error('Error fetching financial data:', error);
    throw new Error('Failed to fetch financial data');
  }
};

