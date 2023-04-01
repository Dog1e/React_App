import "./styles.css";
import Login from "./components/Login/login";
import Register from "./components/register/register";
import { useState } from "react";

export default function App() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <div className="App">
      <h1>Reakcja Aplikacja1</h1>
      {currentForm == "login" ? <Login /> : <Register />}
    </div>
  );
}
