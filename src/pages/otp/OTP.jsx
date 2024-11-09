import React from "react";
import CredentialForm from "../../components/credentialForm/CredentialForm";

const OTP = () => {
  const data = {
    formType: "otp",
    formHeader: "LOG IN",
    inputFields: [{ placeholder: "Enter OTP", inputType: "number" }],
    button: "Next",
    gLogin: false,
  };
  return (
    <div>
      <CredentialForm data={data} />
    </div>
  );
};

export default OTP;
