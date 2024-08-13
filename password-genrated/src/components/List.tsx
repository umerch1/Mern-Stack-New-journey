import { todoDataType } from "../pages/TodoList";

interface listType {
  items: todoDataType;
  todoData: todoDataType[];
  setTodoData: Function;
}

function List({ items, todoData, setTodoData }: listType) {
  const deleteFun = (id: any) => {
    console.log("deleteFunction");
    const newArry = todoData.filter((item) => item.id !== id);
    setTodoData(newArry);
  };
  const markChange = (id: string) => {
    const newArry = todoData.map((todo) =>
      todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoData(newArry);
  };
  return (
    <div className="flex justify-between w-2/4 bg-blue-500 rounded-md items-center">
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          name="isCompleted"
          id="isCompleted"
          className="mr-3"
          checked={items.isCompleted}
          onChange={() => markChange(items.id)}
        />
        <div className={`${items.isCompleted ? "line-through" : ""}`}>
          {items.title}
        </div>
      </div>

      <button
        onClick={() => deleteFun(items.id)}
        className="w-auto h-full p-2 bg-orange-500 rounded-md"
      >
        X
      </button>
    </div>
  );
}

export default List;
