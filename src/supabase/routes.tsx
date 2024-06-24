import { supabase } from './setup';
type signinProps = {
  email: string;
  password: string;
};
export const SignIn = async ({ email, password }: signinProps) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data: data, error: error };
};

export const signUp = async ({ email, password }: signinProps) => {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { data: data, error: error };
};


