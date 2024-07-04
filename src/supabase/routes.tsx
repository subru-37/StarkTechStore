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
  return { data, error };
};

export const signUp = async ({ email, password }: signinProps) => {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { data, error };
};

export const getProductDetails = async () => {
  const { data, error } = await supabase.from('product_details').select(
    `
      id,
      title,
      price,
      image,
      ...categories(
        category_title
      )
      `
  );
  return { data, error };
};

export const getProductDeet = async (id: number) => {
  const { data, error } = await supabase
    .from('product_details')
    .select(
      `
          id,
          title,
          price,
          image,
          ...categories(
            category_title
          )
          `
    )
    .eq('id', id);
  return { data, error };
};

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('id, category_title');
  // console.log(data)
  return { data, error };
};

export const getFilteredProducts = async (
  myfilters: string[],
  range: { low: number; high: number },
  categories: string[]
) => {
  // console.log(priceRange)
  const { data, error } = await supabase
    .from('product_details')
    .select(
      `id,
     title,
     price,
     image,
    ...categories!inner(
      category_title
    )`
    )
    .in(
      'categories.category_title',
      myfilters.length !== 0 ? myfilters : categories
    )
    .gte('price', range.low)
    .lte('price', range.high);
  return { data, error };
};
