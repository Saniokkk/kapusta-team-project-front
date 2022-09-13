import axios from "axios";

// type === income OR expense
export async function getTransactionsSummaryByYear(year, type) {
  const { data } = await axios.get(`/report/summaryByMonth/${year}/${type}`);
  return data;
}

export async function getTransactionsByDate(month, year) {
  const { data } = await axios.get(`/report/byCategory/${month}/${year}`);
  return data;
}

export async function getTransactionsByMonth(month, year) {
  const { data } = await axios.get(`/report/byCategory/${month}/${year}`);
  return data;
}
