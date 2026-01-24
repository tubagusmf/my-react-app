import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { fetchTasks } from "../../../services/taskService";
import TaskForm from "../../../components/task/TaskForm";
import TaskList from "../../../components/task/TaskList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    const loadTasks = async () => {
        const res = await fetchTasks(`?page=${page}&limit=5`);
        setTasks(res.data || []);
    };

    useEffect(() => {
        loadTasks();
    }, [page]);

    return (
        <DashboardLayout onLogout={handleLogout}>
        <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

        <TaskForm onSuccess={loadTasks} />
        <TaskList tasks={tasks} refresh={loadTasks} />

        <div className="flex gap-2 mt-6">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
            </button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
        </DashboardLayout>
    );
}
