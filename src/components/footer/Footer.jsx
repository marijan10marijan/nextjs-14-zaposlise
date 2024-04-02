import React from "react";
import FooterCopyRight from "./footerCopyright/FooterCopyRight";
import FooterNewsletter from "./footerNewsletter/FooterNewsletter";
import FooterNavigation from "./footerNavigation/FooterNavigation";
import FooterSocial from "./footerSocial/FooterSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-flex">
          <FooterSocial />
          <FooterNavigation />
          <FooterNewsletter />
        </div>

        <FooterCopyRight /> 
      </div>
    </footer>
  );
};

export default Footer;
