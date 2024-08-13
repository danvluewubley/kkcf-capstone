import { useEffect } from "react";
import emailjs from "emailjs-com";

function useInitiateEmail() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
}

export default useInitiateEmail
