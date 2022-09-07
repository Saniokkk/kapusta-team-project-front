import { Suspense, lazy } from "react";
import { Loader } from "components/Loader";
import { Routes, Route } from "react-router-dom";
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
// import { TransactionsPage } from "pages/TransactionsPage/TransactionsPage";

// import IncomeReportPage from "pages/Report/IncomeReportPage";
// import ExpensesReportPage from "pages/Report/ExpensesReportPage";
import authSelectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import ExpensesReportPage from "pages/Report/ExpensesReportPage";
import IncomeReportPage from "pages/Report/IncomeReportPage";
// import { BalanceReportSection } from "components/BalanceReportSection";

// import PublicRoute from "routes/PublicRoute";

import "./App.css";

const GoogleLoader = lazy(() =>
  import(
    "./components/GoogleLoader/GoogleLoader" /* webpackChunkName: "GoogleLoader" */
  )
);

const Layout = lazy(() =>
  import("./components/Layout/Layout" /* webpackChunkName: "Layout" */)
);

const Home = lazy(() =>
  import("./pages/Home/Home" /* webpackChunkName: "Home" */)
);

const TransactionsPage = lazy(() =>
  import("./pages/TransactionsPage" /* webpackChunkName: "TransactionsPage" */)
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      {/* <BalanceReportSection /> */}
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
          <Route path="api/auth/google-redirect" element={<GoogleLoader />} />

          {/* <Route
            path="/google-redirect"
=======
          <Route path="/google-redirect" element={<GoogleLoader />} />

          {/* <Route
            path="/google"
>>>>>>> Stashed changes
            element={
              <PublicRoute>
                <GoogleLoader />
              </PublicRoute>
<<<<<<< Updated upstream

            }>

          </Route> */}


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
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Suspense>
  );
}
export default App;
