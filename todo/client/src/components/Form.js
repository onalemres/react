import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import { addTodoAsync } from "../features/todos/services";

function Form() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading);
  const error = useSelector((state) => state.todos.addNewTodo.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading} //loading olana kadar inputlayama
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
