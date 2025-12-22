import AuthLayout from "../../../components/layout/AuthLayout";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <AuthLayout title="Login">
            <LoginForm />

            <p className="text-sm text-center mt-4">Don't have an account? 
                <Link to="/register" className="text-blue-600 hover:underline"> Register </Link>
            </p>
        </AuthLayout>
    );
}
