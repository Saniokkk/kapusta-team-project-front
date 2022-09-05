import "./App.css";

import { Layout } from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
// import { ReportSection } from 'pages/ReportSection';
// import { Switch, Redirect } from "react-router-dom";
// import { useEffect, lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import operations from "./redux/auth/auth-operations";
// import authSelectors from "./redux/auth/auth-selector";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "routes/PublicRoute";
import PrivateRoute from "routes/PrivateRoute";

// import ProductList from 'components/Transaction/ProductList/ProductList';
// import TransactionForm from 'components/Transaction/TransactionForm/TransactionForm';
// import { Transaction } from 'components/Transaction';
import { TransactionsPage } from "pages/TransactionsPage";

import { Home } from "pages/Home";
import IncomeReportPage from "pages/Report/IncomeReportPage";
import ExpensesReportPage from "pages/Report/ExpensesReportPage";

// import PublicRoute from
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="transaction">
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute redirectTo="transaction">
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="transaction"
            element={
              <PrivateRoute>
                <TransactionsPage />
              </PrivateRoute>
            }
          ></Route>

          {/* <Route
            path='logout'
            element={
              <PrivateRoute>
              <ModalLogout />
              </PrivateRoute>
            }
          ></Route> */}

          <Route
            path="income"
            element={
              <PrivateRoute>
                <IncomeReportPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="expenses"
            element={
              <PrivateRoute>
                <ExpensesReportPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="allpages"
            element={
              <>
                <Home />
                <TransactionsPage />
                <ExpensesReportPage />
                <IncomeReportPage />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

// {/* <>
//   <Routes>
//     <Route path='/' element={<Layout />}></Route>
//     <Route path='balance' element={<BalanceReportSection />}></Route>
//     <Route path='logout' element={<ModalLogout />}></Route>
//     <Route path='list' element={<DropDownList />}></Route>
//     <Route path='report' element={<ReportSection />}></Route>
//     <Route path='income' element={<IncomeList />}></Route>
//   </Routes>
//   <Transaction />
//   <Summary />
// </>; */}
