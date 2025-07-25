import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h2 className="text-blue-800 text-center text-xl font-bold">
        Adicionar Tarefa
      </h2>
      <form className="space-y-2">
        <input
          type="text"
          placeholder="Título da Tarefa"
          className="w-full p-2 rounded-md border border-slate-300"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Descrição da Tarefa"
          className="w-full p-2 rounded-md border border-slate-300"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <button
          type="button"
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              //trim() tira os espaços em branco
              return alert("Por favor, preencha todos os campos.");
            }
            onAddTaskClick(title, description);
            setTitle("");
            setDescription("");
          }}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}

export default AddTask;
