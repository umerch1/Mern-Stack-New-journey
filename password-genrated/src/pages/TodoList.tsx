import { FormEvent, useState } from "react";
import List from "../components/List";

export interface todoDataType {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

function TodoList() {
  const [todoData, setTodoData] = useState<todoDataType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("function Call");
    setTodoData([
      ...todoData,
      {
        id: String(Math.random() * 10),
        title: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div className=" w-full h-screen">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => addTodo(e)}
        className="flex justify-center mt-14 items-center"
        method="post"
      >
        <input
          type="text"
          className="h-9 border-2 w-2/4 border-black rounded-xl mr-2 p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name=""
          id=""
        />
        <button
          className="w-auto h-auto p-2 bg-orange-300 rounded-xl "
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <div className="container mt-10">
        {todoData.map((items) => {
          return (
            <div className="flex justify-center my-3">
              <List
                items={items}
                todoData={todoData}
                setTodoData={setTodoData}
              />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default TodoList;
