import "./App.css";
// import { ListExpenses } from "./components/ListExpenses/ListExpenses";
import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { BalanceReportSection } from "components/BalanceReportSection";
import { ModalLogout } from "components/ModalLogout";
import { DropDownList } from "components/DropDownList";
import { Transaction } from "components/Transaction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="balance" element={<BalanceReportSection />}></Route>
        <Route path="logout" element={<ModalLogout />}></Route>
        {/* <Route path="list" element={<DropDownList />}></Route> */}
      </Routes>
      <Transaction />
    </>
  );
}

export default App;
