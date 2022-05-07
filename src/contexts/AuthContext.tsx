import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';

export type UserData = {
  id: string;
  name: string;
  email: string;
}

export type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  userData: UserData;
  token: string | null;
  setToken: (token: string | null) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useMemo(() => !!token, [token]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Started', token)
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setIsLoading(false);
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const userData: UserData = useMemo(() => {
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.data;
  }, [token]);
  
  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      userData,
      token,
      setToken,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;