import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TotoItem from "./component/TodoItem";
import SearchForm from "./component/Search";

const intData = [];

function App() {
  const [tasks, setTasks] = useState(intData);

  const createTask = (input) => {
    const newTask = { id: uuidv4(), title: input, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const deleTask = (idTask) => {
    console.log(idTask);
    const idx = tasks.findIndex((el) => el.id === idTask);
    const newTaskfromdele = [...tasks];
    newTaskfromdele.splice(idx, 1);
    setTasks(newTaskfromdele);
  };

  const updateTask = (idTask, updateValue) => {
    console.log(idTask);
    console.log(updateValue);
    const idx = tasks.findIndex((el) => el.id === idTask);
    const newTaskfromUpdate = [...tasks];
    newTaskfromUpdate[idx] = { ...newTaskfromUpdate[idx], ...updateValue };
    setTasks(newTaskfromUpdate);
  };

  const [search, setSearch] = useState("");

  const filterTodos = tasks.filter((el) =>
    el.title.toLowerCase().includes(search)
  );

  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      <TodoForm addTask={createTask} />
      <br />

      <SearchForm setSearchP={setSearch} text={search} />

      <br />
      <ul className="list-group">
        {filterTodos.map((el) => (
          <TotoItem
            key={el.id}
            todo={el}
            deleTaskP={deleTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
