import "./App.css";
// import { ListExpenses } from "./components/ListExpenses/ListExpenses";
import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
