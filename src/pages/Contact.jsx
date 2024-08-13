import React from "react";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";
import EmailContent from "../components/EmailContent";

function Contact() {
  usePageTitleAndFavicon("Contact", "mail.png");

  return <EmailContent />;
}

export default Contact;
