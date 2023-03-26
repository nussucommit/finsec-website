import React from "react";
import Login, { LoginFields } from "../components/auth/Login";

const LoginPage = () => {
  const onSubmit = async (values: LoginFields) => {
    const { email, password } = values;

    console.log(email);
    console.log(password);
  };

  return <Login onSubmit={onSubmit} />;
};

export default LoginPage;
