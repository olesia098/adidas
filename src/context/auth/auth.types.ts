import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IAuth {
  children: ReactNode;
}

export type AuthValuesTypes = {
  currentUser: boolean | null | string;
  setCurrentUser: any;
  error: any;
  loading: boolean;
  setError: Dispatch<SetStateAction<any>>;
  handleRegister: (
    formData: any,
    navigate: (path: string) => void
  ) => Promise<void>;
  handleLogin: (
    formData: any,
    email: string,
    navigate: (path: string) => void
  ) => Promise<void>;
  checkAuth: () => Promise<void>;
  handleLogout: (navigate: (path: string) => void) => void;
};
