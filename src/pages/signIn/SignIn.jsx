import React from "react";
import CredentialForm from "../../components/credentialForm/CredentialForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  const data = {
    formType: "signin",
    formHeader: "Welcome to Football Junction",
    inputFields: [
      { placeholder: "Enter Email ID", inputType: "email" },
      { placeholder: "Enter Password", inputType: "password" },
    ],
    button: "LOG-IN",
    gLogin: true,
  };
  return (
    <div className="paddingLeftRigth">
      <CredentialForm data={data} />
      <Link to={"/sign-up"}>
        <h4>SignUP Page</h4>
      </Link>
    </div>
  );
};

export default SignIn;
