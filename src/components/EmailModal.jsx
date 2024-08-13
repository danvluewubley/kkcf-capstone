import React, { useState } from "react";
import { Button, Typography, Textarea } from "@material-tailwind/react";
import emailjs from "emailjs-com";

export const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your emailjs service here
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Optionally, reset the form after sending
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section className="flex justify-center bg-gray-100">
      <div className="w-[30%] p-4 bg-white rounded-lg shadow-md h-1/2 my-auto">
        <Typography variant="h5" color="blue-gray">
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 mb-4"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <div className="flex justify-end">
            <Button type="submit" color="blue">
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
