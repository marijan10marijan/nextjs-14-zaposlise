import React from "react";
import NewsletterHeader from "./newsletterHeader/NewsletterHeader";

import FooterNewsletterForm from "./footerNewsletterForm/FooterNewsletterForm";

const FooterNewsletter = () => {
  return (
    <div className="footer-flex__newsletter">
      <NewsletterHeader />
      <FooterNewsletterForm />
    </div>
  );
};

export default FooterNewsletter;
