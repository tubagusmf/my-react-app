import AuthLayout from "../../../components/layout/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    return (
        <AuthLayout title="Register">
            <RegisterForm />
        </AuthLayout>
    );
}
