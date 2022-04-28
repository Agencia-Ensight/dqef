import { useEffect, useMemo, useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = useMemo(() => !!token, [token]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return {
    token,
    setToken,
    isAuthenticated,
  };
};
