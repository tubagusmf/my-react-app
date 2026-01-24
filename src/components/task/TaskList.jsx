import { updateTask, deleteTask } from "../../services/taskService";

export default function TaskList({ tasks, refresh }) {
  const toggleStatus = (task) => {
    updateTask(task.id, {
      ...task,
      status: task.status === "completed" ? "pending" : "completed",
    }).then(refresh);
  };

  const handleDelete = (id) => {
    deleteTask(id).then(refresh);
  };

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <h4 className={task.status === "completed" ? "line-through" : ""}>
              {task.title}
            </h4>

            <div className="space-x-2">
              <button
                onClick={() => toggleStatus(task)}
                className="text-sm bg-green-500 text-white px-2 py-1 rounded"
              >
                {task.status === "completed" ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
