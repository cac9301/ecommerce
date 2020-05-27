import React from "react";
import Breadcrumb from "../Home/Breadcrumb";
import Titles from "../Home/Titles";
import FormNewAccount from "./FormNewAccount";

const Login = () => {
  return (
    <>
      <Breadcrumb Nombre="Register" NombreRuta="Create Account" ruta="new-account" postion="Register" />
      <Titles text="Create An Account" />
      <FormNewAccount />
    </>
  );
};

export default Login;
