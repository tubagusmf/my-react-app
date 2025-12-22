import AuthLayout from "../../../components/layout/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <AuthLayout title="Login">
            <LoginForm />
        </AuthLayout>
    );
}
