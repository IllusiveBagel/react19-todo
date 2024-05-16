import { createSupabaseClient } from "../client";

const supabase = await createSupabaseClient();

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
