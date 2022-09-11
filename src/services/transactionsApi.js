import axios from "axios";

export async function getTransactionsByDate(date) {
  const { data } = await axios.get(`/report/currentDay/${date}`);
  return data;
}

export async function addTransactionExpense(values) {
  const { data } = await axios.post("/transactions/expense", values);
  return data;
}

export async function addTransactionIncome(values) {
  const { data } = await axios.post("/transactions/income", values);
  return data;
}

export async function deleteTransaction(type, transactionId) {
  await axios.delete(`/transactions/${type}/${transactionId}`);
  return transactionId;
}
