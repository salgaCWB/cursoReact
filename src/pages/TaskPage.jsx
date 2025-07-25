import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  function onBackButtonClick() {
    navigate("/"); // Navigate back to the previous page
  }
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackButtonClick}
            className="text-slate-200 font-bold absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-slate-100 text-3xl font-bold text-center">
            Descrição das Tarefas
          </h1>
        </div>
        <div className=" bg-blue-500 text-white p-2 rounded-md w-full">
          <h2 className="text-xl font-bold"> {title} </h2>
          <p>--------------------------------</p>
          <p> {description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
