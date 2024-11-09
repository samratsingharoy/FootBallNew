import React from "react";
import CommonHeroComp from "../commonHeroComp/CommonHeroComp";

const Hero = () => {
  const header = "Privacy Policy";

  const bgImage = "/images/privacypage/heroImage.jpeg";

  const content = [
    "At Football Junction, we are committed to protecting the privacy and personal information of our participants, volunteers, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you engage with us through our events, programs, and online platforms",
    "At Football Junction, we prioritize the privacy and security of our participants, volunteers, and website visitors. This Privacy Policy explains how we collect, use, and protect your personal information. We gather data such as contact details, demographic information, and event-related data through registration forms, surveys, and our website to facilitate smooth communication, improve our services, and manage event participation. We may share this information with trusted third-party service providers, but only for purposes related to our operations, and we ensure strict confidentiality and security measures are in place. You have the right to access, update, or delete your data and can opt-out of receiving promotional communications at any time. Our website may also use cookies to enhance user experience, and you can manage cookie preferences through your browser settings. By engaging with Football Junction, you consent to the terms of this Privacy Policy. For any questions or concerns, feel free to contact us at [email address]. We may update this policy as needed, and any significant changes will be communicated to you.",
  ];
  return (
    <div>
      <CommonHeroComp
        header={header}
        bgImage={bgImage}
        content={content}
        pageName={"Terms & Conditions"}
      />
    </div>
  );
};

export default Hero;
