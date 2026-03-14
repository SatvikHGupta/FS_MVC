import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TEST_EMAIL    = "test@example.com";
const TEST_PASSWORD = "password123";

export default function SignInForm() {
  const { login } = useAuth();
  const navigate  = useNavigate();
  const [form, setForm]   = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function fillTestCreds() {
    setForm({ email: TEST_EMAIL, password: TEST_PASSWORD });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const ok = login(form.email, form.password);
    if (ok) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-extrabold mb-3">Sign in</h1>

      <div className="test-creds">
        <strong>Test account</strong><br />
        Email: {TEST_EMAIL}<br />
        Password: {TEST_PASSWORD}<br />
        <button
          type="button"
          onClick={fillTestCreds}
          style={{
            marginTop: "4px",
            fontSize: "10px",
            fontWeight: 700,
            color: "orangered",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          ↑ Autofill
        </button>
      </div>

      {error && (
        <p style={{ color: "tomato", fontSize: "12px", marginBottom: "4px" }}>
          {error}
        </p>
      )}

      <input className="auth-input" type="email" name="email"
        placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className="auth-input" type="password" name="password"
        placeholder="Password" value={form.password} onChange={handleChange} required />

      <a href="#" className="auth-link">Forgot your password?</a>
      <button type="submit" className="auth-btn">Sign In</button>
    </form>
  );
}
