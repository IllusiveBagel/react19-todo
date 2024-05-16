import { signInWithEmail } from "@/lib/supabase/auth/sign-in-email";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await signInWithEmail(email);
    console.log(JSON.stringify(result, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
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
