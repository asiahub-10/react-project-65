import { redirect } from "react-router-dom";

export const getToken = () => {
  const token = localStorage.getItem('bearer_token');

  // ✅ OPTIONAL: Add token validity check (e.g., expiration)
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // decode JWT
    const isExpired = payload.exp * 1000 < Date.now();
    if (isExpired) {
      localStorage.removeItem('bearer_token'); // cleanup
      return null;
    }
    return token;
  } catch (e) {
    return null;
  }
};

// 🔐 For protected routes
export const requireAuth = () => {
  const token = getToken();
  if (!token) {
    return redirect("/login");    
  }
  return null;
};

// 🚫 For login/public routes
export const redirectIfAuthenticated = () => {
  const token = getToken();
  if (token) {
    return redirect("/dashboard");
  }
  return null;
};
