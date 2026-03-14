import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import OverlayPanels from "./OverlayPanels";

export default function AuthContainer() {
  // true = sign-in view, false = sign-up view
  const [isSigningIn, setIsSigningIn] = useState(true);
  const active = !isSigningIn;

  return (
    <div className="auth-card">
      <div className={`panel panel--signup${active ? " panel--active" : ""}`}>
        <SignUpForm />
      </div>
      <div className={`panel panel--signin${active ? " panel--active" : ""}`}>
        <SignInForm />
      </div>
      <OverlayPanels isSigningIn={isSigningIn} onToggle={setIsSigningIn} />
    </div>
  );
}
