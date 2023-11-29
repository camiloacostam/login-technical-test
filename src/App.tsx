//Pages
import { DashboardPage, LoginPage, RegisterPage } from "./pages";
//Router
import { Routes, Route } from "react-router-dom";
//styles
import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
