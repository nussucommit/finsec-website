import { login } from "api/auth";
import { FirebaseError } from "firebase/app";
import { useNotification } from "hooks/notification";
import React from "react";
import Login, { LoginFields } from "../components/auth/Login";

const LoginPage = () => {
  const { showSuccess, showError } = useNotification();
  const [isLoading, setLoading] = React.useState(false);

  const onSubmit = async (values: LoginFields) => {
    const { email, password } = values;

    setLoading(true);
    try {
      await login({
        email,
        password,
      });
      showSuccess({
        title: "Login Success",
        message: "Logged in successfully",
      });
    } catch (e) {
      let errorMessage = "";

      if (e instanceof FirebaseError) {
        if (e.code === "auth/user-not-found") {
          errorMessage = "User not found";
        } else if (e.code === "auth/wrong-password") {
          errorMessage = "Wrong password";
        } else {
          console.log(e.code);
          errorMessage = "Unknown error";
        }
      } else {
        errorMessage = "Unknown error";
      }

      showError({
        title: "Error",
        message: errorMessage,
      });
    }

    setLoading(false);
  };

  return <Login onSubmit={onSubmit} isLoading={isLoading} />;
};

export default LoginPage;
