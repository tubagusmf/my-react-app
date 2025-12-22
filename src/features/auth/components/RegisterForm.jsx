import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function RegisterForm() {
    return (
        <form className="space-y-4">
            <div>
                <Label text="Name" />
                <Input type="text" placeholder="Your name" />
            </div>

            <div>
                <Label text="Email" />
                <Input type="email" placeholder="Please enter your email" />
            </div>

            <div>
                <Label text="Password" />
                <Input type="password" placeholder="Please enter your password" />
            </div>

            <Button text="Register" type="submit" />
        </form>
    );
}
