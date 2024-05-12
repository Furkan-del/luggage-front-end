export default interface AuthContextType { //bunu da types a almak lazım
    token: string | null;
    setToken: (token: string | null) => void;
  }
  