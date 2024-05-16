import SignInForm from "@/components/form-sign-in";
import { signOut } from "@/lib/supabase/auth/sign-out";
import { verifyOTP } from "@/lib/supabase/auth/verify-otp";
import { createSupabaseClient } from "@/lib/supabase/client";
import { EmailOtpType, Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabase = await createSupabaseClient();

const Home = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // check if access token in query string
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const searchParams = new URLSearchParams(window.location.search);
    const error = hashParams.get("error");
    const access_token = searchParams.get("access_token");

    if (error) {
      const errorDesc = hashParams.get("error_description");
      window.history.replaceState({}, document.title, "/");
      alert(`${error} - ${errorDesc}`);
    }

    if (access_token) {
      const type = hashParams.get("type");
      console.log("access_token", access_token);
      window.history.replaceState({}, document.title, "/");
      verifyOTP(access_token, type as EmailOtpType);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {session ? (
        <p
          style={{
            display: "block",
          }}
        >
          Logged in as {session.user.email} |{" "}
          <button type="button" onClick={signOut}>
            Log out
          </button>
        </p>
      ) : (
        <SignInForm />
      )}
      <h1>Home</h1>
    </>
  );
};

export default Home;
