//Router
import { Routes, Route } from "react-router-dom";
//styles
import "./App.css";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/registe-page";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
