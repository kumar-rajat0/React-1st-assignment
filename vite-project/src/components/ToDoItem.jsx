import { useState } from "react";
import "./style.css";

 function ToDoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.text);

  const save = () => {
    editTodo(todo.id, tempText);
    setEditing(false);
  };

  return (
    <div className="todo-item" style={{ marginTop: "10px" }}>
      {editing ? (
        <>
          <input value={tempText} onChange={(e) => setTempText(e.target.value)} />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>Done</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
export default ToDoItem;