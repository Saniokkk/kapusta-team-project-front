import axios from "axios";

// type === income OR expense
export async function getTransactionsByType(type) {
  const { data } = await axios.get(`/report/currentYear/${type}`);
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
