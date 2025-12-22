import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p className="mt-2 text-gray-600">
                You are logged in successfully.
            </p>

            <Link
                to="/"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Logout
            </Link>
        </DashboardLayout>
    );
}
