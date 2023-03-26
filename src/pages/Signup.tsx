import { FirebaseError } from "firebase/app";
import { useNotification } from "hooks/notification";
import React from "react";
import { signUp } from "../api/auth";
import Signup, { SignupFields } from "../components/auth/Signup";

const SignupPage = () => {
  const { showSuccess, showError } = useNotification();
  const [isLoading, setLoading] = React.useState(false);

  const onSubmit = async (values: SignupFields) => {
    const { name, email, subcomms, password, contactNum } = values;

    setLoading(true);
    try {
      await signUp({
        name,
        email,
        subcomms,
        password,
        contactNum,
      });
      showSuccess({
        title: "Sign up Success",
        message: "Signed up successfully",
      });
    } catch (e) {
      let errorMessage = "";

      if (e instanceof FirebaseError) {
        if (e.code === "auth/email-already-exists") {
          errorMessage = "Email already exists";
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

  return <Signup onSubmit={onSubmit} isLoading={isLoading} />;
};

export default SignupPage;
