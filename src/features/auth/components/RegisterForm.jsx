import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../../../components/ui/Label";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Register failed");
        return;
      }

      setMessage(data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError("Server error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {message && (
        <p className="text-green-600 text-sm bg-green-100 p-2 rounded">
          {message} -- Please wait...
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm bg-red-100 p-2 rounded">
          {error}
        </p>
      )}

      <div>
        <Label text="Name" htmlFor="name" />
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label text="Email" htmlFor="email" />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Please enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label text="Password" htmlFor="password" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Please enter your password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <Button
        text={loading ? "Registering..." : "Register"}
        type="submit"
        disabled={loading}
      />
    </form>
  );
}
