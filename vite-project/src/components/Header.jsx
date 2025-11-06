import { useState } from "react";
import "./style.css";

 function Header({ addTodo }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="Header">
      <h2>To-Do Application</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Task"
      />
      <button className="add" onClick={submit}>Add</button>
    </div>
  );
}
export default Header;