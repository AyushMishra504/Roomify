interface AuthState {
  isSignedIn: boolean;
  username: string | null;
  userId: string | null;
}

interface AuthContext {
  isSignedIn: boolean;
  username: string | null;
  userId: string | null;
  refreshAuthState: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
  signIn: () => Promise<boolean>;
}
