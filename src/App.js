import { createContext } from "react";
import "./styles.css";
import About from "./component/about";
import Popup from "./component/popup/popup";
import Todo from "./component/todo";

export default function App() {
  return (
    <div>
      <Popup />
      <Todo />
      <About />
    </div>
  );
}
