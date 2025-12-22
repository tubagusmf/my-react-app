import AuthLayout from "../../../components/layout/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <AuthLayout title="Register">
            <RegisterForm />

            <p className="text-sm text-center mt-4">Do you have an account? 
                <Link to="/login" className="text-blue-600 hover:underline"> Login </Link>
            </p>
        </AuthLayout>
    );
}
