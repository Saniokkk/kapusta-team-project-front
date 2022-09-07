import { Suspense, lazy } from "react";
import { Loader } from "components/Loader";
import { Routes, Route, Navigate } from "react-router-dom";
import { ReportSection } from "components/ReportSection";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "routes/ProtectedRoute";
import authSelectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
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

const Report = lazy(() =>
  import(
    "./components/ReportSection/ReportSection" /* webpackChunkName: "TransactionsPage" */
  )
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="report" element={<ReportSection />}></Route>
          <Route
            index
            element={
              <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="report">
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="report"
            element={
              <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
                <Report />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="api/auth/google-redirect" element={<GoogleLoader />} />
      </Routes>
    </Suspense>
  );
}
export default App;
