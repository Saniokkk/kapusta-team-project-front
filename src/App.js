import "./App.css";
import { Layout } from "components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
// import { ReportSection } from 'pages/ReportSection';
import { ReportSection } from "components/ReportSection";
// import { Switch, Redirect } from "react-router-dom";
// import { useEffect, lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import operations from "./redux/auth/auth-operations";
// import authSelectors from "./redux/auth/auth-selector";
import "react-toastify/dist/ReactToastify.css";
// import PublicRoute from "routes/PublicRoute";
// import PrivateRoute from "routes/PrivateRoute";
import { ProtectedRoute } from "routes/ProtectedRoute";
// import ProductList from 'components/Transaction/ProductList/ProductList';
// import TransactionForm from 'components/Transaction/TransactionForm/TransactionForm';
// import { Transaction } from 'components/Transaction';
import { TransactionsPage } from "pages/TransactionsPage";

import { Home } from "pages/Home";
// import IncomeReportPage from "pages/Report/IncomeReportPage";
// import ExpensesReportPage from "pages/Report/ExpensesReportPage";
import authSelectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import ExpensesReportPage from "pages/Report/ExpensesReportPage";
import IncomeReportPage from "pages/Report/IncomeReportPage";

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="report" element={<ReportSection />}></Route>
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={!isLoggedIn}
                redirectPath="transaction"
              >
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="transaction"
            element={
              <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
                <TransactionsPage />
              </ProtectedRoute>
            }
          />
          {/* // <Route
          //   path="income"
          //   element={
          //     <PrivateRoute>
          //       <IncomeReportPage />
          //     </PrivateRoute>
          //   }
          // ></Route> */}

          {/* <Route
            path="expenses"
            element={
              <PrivateRoute>
                <ExpensesReportPage />
              </PrivateRoute>
            }
          ></Route> */}
          <Route
            path="allpages"
            element={
              <>
                {/* <Home /> */}
                {/* <TransactionsPage /> */}
                <ExpensesReportPage />
                <IncomeReportPage />
              </>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
