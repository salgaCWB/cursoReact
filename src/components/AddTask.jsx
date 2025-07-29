import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h2 className="text-blue-800 text-center text-xl font-bold">
        Adicionar Tarefa
      </h2>
      <form className="space-y-2">
        <Input
          type="text"
          placeholder="Informe o Título da Tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextArea
          placeholder="Digite aqui a descrição da Tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
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
