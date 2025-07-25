import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar Programação para se tornar um DEV full Stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar Inglês p[ara se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matematica",
      description: "Estudar Matemática para se tornar bom em cálculo",
      isCompleted: false,
    },
  ]);
  function onAddTaskClick(title, description) {
    const newTask = {
      id: tasks.length + 2,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
