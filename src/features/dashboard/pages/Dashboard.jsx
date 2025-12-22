import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p className="mt-2 text-gray-600">
                You are logged in successfully.
            </p>
        </DashboardLayout>
    );
}
