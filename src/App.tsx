//Pages
import { DashboardPage, LoginPage, RegisterPage } from "./pages";
//Router
import { Routes, Route } from "react-router-dom";
//styles
import "./App.css";
import { ProtectedRoute } from "./features/routes";
import ErrorNotFoundPage from "./pages/error-not-found-page";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
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
