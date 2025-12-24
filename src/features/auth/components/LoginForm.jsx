import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //call api
        navigate("/dashboard");
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <Label text="Email" htmlFor="email" />
                <Input type="email" placeholder="Please enter your email" name="email" id="email" />
            </div>

            <div>
                <Label text="Password" htmlFor="password" />
                <Input type="password" placeholder="Please enter your password" name="password" id="password" />
            </div>

            <Button text="Login" type="submit" />
        </form>
    );
}