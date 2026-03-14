export default function OverlayPanels({ isSigningIn, onToggle }) {
  const active = !isSigningIn;

  return (
    <div className={`overlay-container${active ? " panel--active" : ""}`}>
      <div className={`overlay${active ? " panel--active" : ""}`}>
        <div className={`overlay-panel overlay-panel--left${active ? " panel--active" : ""}`}>
          <h1 className="text-2xl font-extrabold mb-2">Welcome Back!</h1>
          <p className="text-sm font-light leading-5 tracking-wide my-5">
            To keep connected with us please login with your personal info
          </p>
          <button type="button" className="auth-btn auth-btn--ghost" onClick={() => onToggle(true)}>
            Sign In
          </button>
        </div>
        <div className={`overlay-panel overlay-panel--right${active ? " panel--active" : ""}`}>
          <h1 className="text-2xl font-extrabold mb-2">Hello, Friend!</h1>
          <p className="text-sm font-light leading-5 tracking-wide my-5">
            Enter your personal details and start your journey with us
          </p>
          <button type="button" className="auth-btn auth-btn--ghost" onClick={() => onToggle(false)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
