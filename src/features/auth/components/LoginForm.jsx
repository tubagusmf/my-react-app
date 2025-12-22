import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function LoginForm() {
    return (
        <form className="space-y-4">
            <div>
                <Label text="Email" />
                <Input type="email" placeholder="Please enter your email" />
            </div>

            <div>
                <Label text="Password" />
                <Input type="password" placeholder="Please enter your password" />
            </div>

            <Button text="Login" type="submit" />
        </form>
    );
}