import { createSupabaseClient } from "@/lib/supabase/client";

export async function signInWithEmail(email: string) {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: window.location.origin,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
