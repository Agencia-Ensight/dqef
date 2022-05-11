import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { axiosClient } from '../services/api';

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
  hasuraToken: string | null;
  setToken: (token: string | null) => void;
  setHasuraToken: (token: string | null) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [hasuraToken, setHasuraToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useMemo(() => !!token, [token]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const hasuraToken = localStorage.getItem('hasuraToken');
    
    if (token) {
      setToken(token);
    }
    
    if (hasuraToken) {
      setHasuraToken(hasuraToken);
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);

    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    if (hasuraToken) {
      localStorage.setItem('hasuraToken', hasuraToken);
    } else {
      localStorage.removeItem('hasuraToken');
    }

  }, [token, hasuraToken]);

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
      hasuraToken,
      setToken,
      setHasuraToken,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;