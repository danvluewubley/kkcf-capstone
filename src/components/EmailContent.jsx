import React from "react";
import { EmailForm } from "./EmailForm";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

function EmailContent() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode && "dark"}`}>
      <EmailForm />
      <DarkModeToggleButton />
    </div>
  );
}

export default EmailContent;
