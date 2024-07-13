import { supabase } from './setup';
import { v4 as uuidv4, validate as uuidValidate, validate } from 'uuid';

type signinProps = {
  email: string;
  password: string;
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
  categories: string[],
  search: string
) => {
  // console.log(priceRange)
  if (search.length !== 0) {
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
      .lte('price', range.high)
      .ilike('title', `${search}%`);
    return { data, error };
  } else {
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
  }
};

export const SignUp = async (email: string, password: string, name: string) => {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    // email_confirm: true
  });
  return { data, error };
};

export const LogIn = async (email: string, password: string) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export const setProfileDetails = async (
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  id: string
) => {
  // const myid: UUID = id;
  console.log({
    email: email,
    username: username,
    first_name: firstName,
    last_name: lastName,
    id: id,
    // contact_id: '',
    profile_pic: '',
  });
  console.log(uuidv4());
  let { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        id: id,
        // contact_id: '',
        profile_pic: '',
      },
    ])
    .select();
  console.log(data, error);
  return { data, error };
};

export const getProfileDetails = async (uuid: string) => {
  let { data, error } = await supabase
    .from('profiles')
    .select(
      `
    id, 
    username, 
    email, 
    first_name, 
    last_name, 
    profile_pic, 
    contact_id
    `
    )
    .eq('id', uuid);
  return { data, error };
};

export const LogOut = async () => {
  let { error } = await supabase.auth.signOut();
  return { error };
};
