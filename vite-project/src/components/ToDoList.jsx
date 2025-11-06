import ToDoItem from "./ToDoItem";
import "./style.css"

 function ToDoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
export default ToDoList;