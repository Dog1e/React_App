import "./styles.css";
import Login from "./components/Login/login";

Users = [
  {
    username: "Admin",
    email: "admin@gmail.com",
    password: "qwerty",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>Reakcja Aplikacja1</h1>
      <Login />
    </div>
  );
}
