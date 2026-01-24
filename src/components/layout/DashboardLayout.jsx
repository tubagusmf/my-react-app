export default function DashboardLayout({ children, onLogout }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white px-6 py-4 font-bold flex justify-between items-center">
                <span>Dashboard</span>

                <button
                    onClick={onLogout}
                    className="text-sm bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </nav>

            <main className="p-6">{children}</main>
        </div>
    );
}
