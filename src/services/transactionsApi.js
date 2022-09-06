import axios from "axios";

export async function getTransactions() {
  const { data } = await axios.get("/transactions");
  return data;
}

export async function getTransactionsByDate(month, year) {
  const { data } = await axios.get(`/transactions/total/${month}/${year}`);
  return data;
}

export async function addTransaction(values) {
  const { data } = await axios.post("/transactions", values);
  return data;
}

export async function deleteTransaction(transactionId) {
  await axios.delete(`/transactions/${transactionId}`);
  return transactionId;
}
