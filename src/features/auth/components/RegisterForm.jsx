import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function RegisterForm() {
    return (
        <form className="space-y-4">
            <div>
                <Label text="Name" htmlFor="name" />
                <Input type="text" placeholder="Your name" name="name" id="name" />
            </div>

            <div>
                <Label text="Email" htmlFor="email" />
                <Input type="email" placeholder="Please enter your email" name="email" id="email" />
            </div>

            <div>
                <Label text="Password" htmlFor="password" />
                <Input type="password" placeholder="Please enter your password" name="password" id="password" />
            </div>

            <Button text="Register" type="submit" />
        </form>
    );
}
