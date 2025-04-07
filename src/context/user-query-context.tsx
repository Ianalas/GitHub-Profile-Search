import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

interface UserQueryContextType {
  profile: ProfileTypeResponse;
  isFounded: boolean;
  isLoading: boolean;
  hasSearched: boolean;
  fetchProfile: (query: string) => Promise<void>;
}

interface UserQueryTypeProviderProps {
  children: ReactNode;
}

interface ProfileTypeResponse {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

const AuthorizationAPI = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
};

export const UserQueryContext = createContext({} as UserQueryContextType);

export function UserQueryProvider({ children }: UserQueryTypeProviderProps) {
  const [profile, setProfile] = useState<ProfileTypeResponse>(
    {} as ProfileTypeResponse
  );

  const [isFounded, setIsFounded] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const fetchProfile = async (query: string) => {
    setIsLoading(true); // Começa o "loading"

    try {

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await api.get<ProfileTypeResponse>(
        `users/${query}`,
        AuthorizationAPI
      );

      if(response.data.login){
        setIsFounded(true);
        setProfile(response.data);
      }else{
        setIsFounded(false);
      }
    } catch (error: any) {
      console.error("Erro ao buscar perfil:", error);

      if (error.response && error.response.status === 404) {
        setIsFounded(false);
      }
    } finally {
      setHasSearched(true);
      setIsLoading(false); // Finaliza o "loading"
    }
  };

  return (
    <UserQueryContext.Provider value={{ fetchProfile, profile, isFounded, hasSearched, isLoading }}>
      {children}
    </UserQueryContext.Provider>
  );
}
