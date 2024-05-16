import { createSupabaseClient } from "@/lib/supabase/client";

export async function signInWithEmail(email: string) {
  const supabase = await createSupabaseClient();

  const result = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: window.location.origin,
    },
  });

  return result;
}
