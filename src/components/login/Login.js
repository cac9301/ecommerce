import React from "react";
import Breadcrumb from "../Home/Breadcrumb";
import Titles from "../Home/Titles";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <>
      <Breadcrumb Nombre="Login" NombreRuta="Create Account" ruta="new-account" postion="Login" />
      <Titles text="login" />
      <FormLogin />
    </>
  );
};

export default Login;
