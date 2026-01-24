import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("access_token");

            if (!token) {
                navigate("/login");
                return;
            }

            const res = await fetch(
                "http://localhost:3000/v1/auth/user/1",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) {
                localStorage.removeItem("access_token");
                navigate("/login");
                return;
            }

            const data = await res.json();
            setUser(data.data);
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    if (!user) return <p>Loading...</p>;

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold">
                Welcome, {user.name}
            </h1>

            <p className="mt-2 text-gray-600">
                You are logged in successfully.
            </p>

            <button
                onClick={handleLogout}
                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
                Logout
            </button>
        </DashboardLayout>
    );
}
