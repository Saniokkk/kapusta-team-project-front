import axios from "axios";

axios.defaults.baseURL = "https://kapusta42back-end.herokuapp.com/api";
export const getData = async () => {
  const res = await axios.get("/transactions/income");
  //   console.log(res);
  return res.data;
};

// getData();
