export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white px-6 py-4 font-bold">
                Dashboard
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
}

  