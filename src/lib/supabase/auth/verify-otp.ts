import { EmailOtpType } from "@supabase/supabase-js";
import { createSupabaseClient } from "../client";

const supabase = await createSupabaseClient();

export const verifyOTP = async (token: string, type: EmailOtpType) => {
  const { data, error } = await supabase.auth.verifyOtp({
    token_hash: token,
    type: type,
  });
  if (error) throw error;
  return data;
};
