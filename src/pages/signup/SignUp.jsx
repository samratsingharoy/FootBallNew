import React from "react";
import CredentialForm from "../../components/credentialForm/CredentialForm";

const SignUp = () => {
  const data = {
    formType: "signup",
    formHeader: "SIGN UP",
    inputFields: [
      { placeholder: "Enter Email ID", inputType: "email" },
      { placeholder: "Create Password", inputType: "password" },
    ],
    button: "Next",
    gLogin: true,
  };
  return (
    <div>
      <CredentialForm data={data} />
    </div>
  );
};

export default SignUp;
