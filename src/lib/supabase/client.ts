import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";

export async function createSupabaseClient(
  options?: SupabaseClientOptions<"public">,
) {
  const env = import.meta.env;
  const url = env.VITE_SUPABASE_URL as string;
  const anonKey = env.VITE_SUPABASE_ANON_KEY as string;

  if (
    !url ||
    !anonKey ||
    url === "" ||
    anonKey === ""
  ) {
    throw new Error("Missing environment variables for Supabase.");
  }

  const client = createClient(
    url,
    anonKey,
    options,
  );
  return client;
}
