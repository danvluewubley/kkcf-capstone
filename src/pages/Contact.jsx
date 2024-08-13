import React from "react";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";
import EmailContent from "../components/EmailContent";

function Contact() {
  usePageTitleAndFavicon("Home", "mail.png");

  return <EmailContent />;
}

export default Contact;
