import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUserData } from "api/profile";
import { UserProfile } from "types/profile";

type AuthContextType = {
  user: UserProfile | null;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

// Call this hook if you need user data or check whether user is logged in
// If user is not authenticated, the value will be null
export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth has to be used within AuthProvider");
  }

  return context;
};

export function AuthProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [user, setUser] = React.useState<UserProfile | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get details
        getUserData().then((data) => {
          setUser(data);
        });
      } else {
        setUser(user);
      }
    });

    return unsubscribe;
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
