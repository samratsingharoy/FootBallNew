import React from "react";
import CredentialForm from "../../components/credentialForm/CredentialForm";

const ForgotPassword = () => {
  const data = {
    formType: "forgotPassword",
    formHeader: "Forgot Password",
    inputFields: [
      { placeholder: "Password", inputType: "password" },
      { placeholder: "Confirm Password", inputType: "password" },
    ],
    button: "Change Password",
    gLogin: false,
  };
  return (
    <div>
      <CredentialForm data={data} />
    </div>
  );
};

export default ForgotPassword;
