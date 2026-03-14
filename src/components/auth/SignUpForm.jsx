import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const ok = signup(form.name, form.email, form.password);
    if (ok) {
      navigate("/dashboard");
    } else {
      setError("Sign up failed. Please fill in all fields.");
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-extrabold mb-1">Create Account</h1>

      {error && (
        <p style={{ color: "tomato", fontSize: "12px", margin: "4px 0" }}>{error}</p>
      )}

      <input className="auth-input" type="text" name="name"
        placeholder="Name" value={form.name} onChange={handleChange} required />
      <input className="auth-input" type="email" name="email"
        placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className="auth-input" type="password" name="password"
        placeholder="Password" value={form.password} onChange={handleChange} required />

      <button type="submit" className="auth-btn mt-4">Sign Up</button>
    </form>
  );
}
