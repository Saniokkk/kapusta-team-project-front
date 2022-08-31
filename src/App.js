import "./App.css";
// import { ListExpenses } from "./components/ListExpenses/ListExpenses";
// import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
// import { BalanceReportSection } from "components/BalanceReportSection";
import { ModalLogout } from "components/ModalLogout";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route>
        <Route path="balance" element={<BalanceReportSection />}></Route> */}
        <Route path="/" element={<ModalLogout />}></Route>
      </Routes>
    </>
  );
}

export default App;
