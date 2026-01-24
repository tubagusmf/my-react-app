import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            navigate("/login");
            return;
        }

        const fetchUser = async () => {
            const res = await fetch("http://localhost:3000/v1/auth/user/1", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                localStorage.removeItem("access_token");
                navigate("/login");
                return;
            }

            const data = await res.json();
            setUser(data.data);
        };

        const fetchTasks = async () => {
            const res = await fetch("http://localhost:3000/v1/tasks", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            setTasks(data.data || []);
            setLoadingTasks(false);
        };

        fetchUser();
        fetchTasks();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    if (!user) return <p>Loading user...</p>;

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">
                Welcome, {user.name}
            </h1>

            <button
                onClick={handleLogout}
                className="mb-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
                Logout
            </button>

            <h2 className="text-xl font-semibold mb-3">My To Do List</h2>

            {loadingTasks ? (
                <p>Loading tasks...</p>
            ) : tasks.length === 0 ? (
                <p className="text-gray-500">No tasks found.</p>
            ) : (
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="bg-white p-4 rounded shadow"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold">{task.title}</h3>
                                <span
                                    className={`text-sm px-2 py-1 rounded ${
                                        task.status === "completed"
                                            ? "bg-green-100 text-green-700"
                                            : task.status === "in_progress"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {task.status}
                                </span>
                            </div>

                            <p className="text-gray-600 mt-1">
                                {task.description}
                            </p>

                            <p className="text-sm mt-2">
                                Priority:{" "}
                                <span className="font-semibold">
                                    {task.priority}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </DashboardLayout>
    );
}
