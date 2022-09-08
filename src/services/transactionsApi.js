import axios from "axios";

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

// export async function getTransactions() {
//   const { data } = await axios.get("/transactions");
//   return data;
// }

// export async function getTransactionsByDate(month, year) {
//   const { data } = await axios.get(`/transactions/total/${month}/${year}`);
//   return data;
// }

// export async function addTransaction(values) {
//   const { data } = await axios.post("/transactions", values);
//   return data;
// }
