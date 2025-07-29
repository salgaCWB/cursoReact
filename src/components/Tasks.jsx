import { ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    // Use encodeURIComponent to ensure the title and description are URL-safe
    // and can be passed as query parameters.
    // This will navigate to the TaskPage with the task details in the URL.
    // The TaskPage will then read these parameters and display the task details.
    // This is useful for showing detailed information about a task when clicked.
    // It allows the user to see more information about the task in a separate page.
    // The useSearchParams hook in TaskPage will read these parameters.
    // This is a common pattern in React Router for passing data between components.
    // It allows for a clean separation of concerns and keeps the URL meaningful.
    // This is useful for deep linking to specific tasks.
    // It allows users to bookmark or share links to specific tasks.
    // This is a common practice in web applications to enhance user experience.
    // It allows for better navigation and usability.
    navigate(`/task?${query.toString()}`, { replace: true }); // replace: true prevents adding a new entry in the history stack
    // This means that when the user clicks the back button, they will not return to the previous task details page.
    // Instead, they will return to the previous page they were on before clicking the task.;
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left bg-blue-500 text-white p-2 rounded-md w-full ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;
