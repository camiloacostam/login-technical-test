//Pages
import { DashboardPage, LoginPage, RegisterPage } from "./pages";
//Router
import { Routes, Route } from "react-router-dom";
//styles
import "./App.css";
import { ProtectedRoute } from "./features/routes";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          {/* <ProtectedRoute
            path="/"
            element={<DashboardPage />}
            isAuthenticated={false}
          /> */}
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={false}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
