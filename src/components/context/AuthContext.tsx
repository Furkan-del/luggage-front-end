import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType { //bunu da types a almak lazım
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps { //bunları çalışmaya başlayınca types kısmına almak lazım
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};