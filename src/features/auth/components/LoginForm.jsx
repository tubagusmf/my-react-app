import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:3000/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Login gagal");
                return;
            }

            localStorage.setItem("access_token", data.accessToken);
            navigate("/dashboard");
        } catch (err) {
            setError("Server tidak dapat dihubungi");
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}

            <div>
                <Label text="Email" htmlFor="email" />
                <Input
                    type="email"
                    placeholder="Please enter your email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <Label text="Password" htmlFor="password" />
                <Input
                    type="password"
                    placeholder="Please enter your password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button text="Login" type="submit" />
        </form>
    );
}
