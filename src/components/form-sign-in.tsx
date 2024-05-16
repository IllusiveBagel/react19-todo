import { signInWithEmail } from "@/lib/supabase/auth/sign-in-email";
import { AuthOtpResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [signInResult, setSignInResult] = useState<AuthOtpResponse | null>(
    null
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (email === "") return alert("Email is required");
    const result = await signInWithEmail(email);
    setSignInResult(result);
  };

  useEffect(() => {
    if (signInResult) {
      if ("error" in signInResult && signInResult.error) {
        alert(signInResult.error.message);
        return;
      }
      alert("Check your email for the OTP");
    }
  }, [signInResult]);

  return (
    <form onSubmit={handleSubmit}>
      <label
        style={{
          marginBottom: "0.5rem",
        }}
      >
        Email:
        <input
          style={{
            display: "inline",
            marginInline: "0.5rem",
          }}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
