import { supabase } from './supabaseClient.js';

// Function to handle Kakao login
export const signInWithKakao = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  });
  if (error) {
    console.error('Error signing in with Kakao:', error);
  }
};

// Function to handle logout
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
  }
};

// Function to get the current user session
export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

// Listen for auth state changes
export const onAuthStateChange = (callback) => {
    supabase.auth.onAuthStateChange((event, session) => {
        callback(session);
    });
};
