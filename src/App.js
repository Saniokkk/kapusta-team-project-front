import "./App.css";
// import { ListExpenses } from "./components/ListExpenses/ListExpenses";
import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { BalanceReportSection } from "components/BalanceReportSection";
import { ModalLogout } from "components/ModalLogout";
import { DropDownList } from "components/DropDownList";
import { Transaction } from "components/Transaction";
import { ReportSection } from "components/ReportSection";
import { Summary } from "components/Summary";
import IncomeList from "components/Income/IncomeList";
// import { Switch, Redirect } from "react-router-dom";
// import { useEffect, lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import operations from "./redux/auth/auth-operations";
// import authSelectors from "./redux/auth/auth-selector";
import "react-toastify/dist/ReactToastify.css";

// import PublicRoute from
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="logout" element={<ModalLogout />}></Route>
        <Route path="list" element={<DropDownList />}></Route>
        <Route path="report" element={<ReportSection />}></Route>
        <Route path="income" element={<IncomeList />}></Route>
      </Routes>
      <Transaction />
      <BalanceReportSection />
      <Summary />
    </>
  );
}

export default App;
