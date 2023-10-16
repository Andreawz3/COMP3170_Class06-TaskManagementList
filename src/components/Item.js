import deleteIcon from "../icons/delete.png";
import { useContext } from "react";
import { TodoContext } from "../data/TodoContext";

export default function Item(props) {
  const todo = props.todo;
  const { setEditing, todos } = useContext(TodoContext);

  function handleDelete() {
    props.remove(todo);
  }

  function handleStatusChange() {
    props.toggleSelected(todo);
  }

  return (
    <li className="todo">
      <div className="todo_details">
        <p>
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={todo.played}
          />
          <span className="todo_item">
            {todo.played ? <del>{todo.title}</del> : todo.title}
          </span>
        </p>
      </div>
      <div className="itemBtn">
        <button onClick={() => setEditing(todo.id)}>edit</button>
        <div onClick={handleDelete}>
          <img className="delete_button" src={deleteIcon} alt="delete icon" />
        </div>
      </div>
    </li>
  );
}
