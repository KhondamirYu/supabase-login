'use client'

import { supabase } from "./supabaseClient";


export const GoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            scopes: 'https://www.googleapis.com/auth/userinfo.email',
            redirectTo: process.env.NEXT_PUBLIC_URL,
        },
    })
}
export const EmailSignUp = async (fullName, email, password) => {

    await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { full_name: fullName },
            redirectTo: `${process.env.NEXT_PUBLIC_URL}/login`,
        },
    });
};
export const EmailLogin = async (email, password) => {
    console.log(email, password)
    await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
            emailRedirectTo: process.env.NEXT_PUBLIC_URL,
        },
    })
}

export const getUser = async () => {
    const { data: auth } = await supabase.auth.getUser()

    return { ...auth.user }
}
export const logOut = async () =>
    await supabase.auth.signOut()

export const GetItems = async () =>
    (await supabase.from("Food List").select("*")).data

export const sendItems = async (request) =>
    await supabase.from("Food List").insert([request]).select()

