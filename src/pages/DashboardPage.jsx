import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const STATS = [
  { label: "Projects",   value: "12" },
  { label: "Tasks Done", value: "48" },
  { label: "Streak",     value: "7d" },
];

const QUICK_LINKS = [
  { emoji: "📁", label: "My Files" },
  { emoji: "📊", label: "Analytics" },
  { emoji: "⚙️",  label: "Settings" },
  { emoji: "🔔", label: "Notifications" },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const displayName  = user?.name || user?.email?.split("@")[0] || "User";
  const avatarLetter = displayName[0].toUpperCase();
  const joinedDate   = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  function handleLogout() {
    logout();
    navigate("/auth");
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-topbar">
        <span className="logo">AuthApp</span>
        <div className="topbar-right">
          <span className="topbar-email">{user?.email}</span>
          <div className="topbar-avatar">{avatarLetter}</div>
          <button className="topbar-logout" onClick={handleLogout}>Sign Out</button>
        </div>
      </header>

      <main className="dashboard-body">
        <div className="dashboard-card">
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "linear-gradient(135deg, orangered, hotpink)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px",
          }}>
            <span style={{ color: "white", fontSize: 28, fontWeight: 800 }}>
              {avatarLetter}
            </span>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>
            Welcome back, {displayName}!
          </h1>
          <p style={{ marginBottom: 0 }}>
            Signed in as <strong>{user?.email}</strong>
          </p>
          <p style={{ fontSize: 12, marginTop: 4 }}>Member since {joinedDate}</p>

          <div className="divider" />

          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="label">{s.label}</div>
                <div className="value">{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 32 }}>
            {QUICK_LINKS.map((q) => (
              <button
                key={q.label}
                style={{
                  background: "var(--bg-input)",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 8px",
                  cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif",
                  transition: "background 0.2s, transform 0.1s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-input-focus)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-input)")}
                onMouseDown={(e)  => (e.currentTarget.style.transform = "scale(0.95)")}
                onMouseUp={(e)    => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span style={{ fontSize: 20 }}>{q.emoji}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {q.label}
                </span>
              </button>
            ))}
          </div>

          <p className="notice">
            🔒 This is a <strong>protected route</strong>. Only authenticated
            users can access this page. Unauthenticated visitors are
            redirected to <code>/auth</code>.
          </p>
        </div>
      </main>
    </div>
  );
}
