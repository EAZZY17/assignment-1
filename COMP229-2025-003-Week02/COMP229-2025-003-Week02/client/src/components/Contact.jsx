import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("lastMessage", JSON.stringify(form));
    navigate("/");
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name<input name="firstName" onChange={handleChange} /></label>
        <label>Last Name<input name="lastName" onChange={handleChange} /></label>
        <label>Phone<input name="phone" onChange={handleChange} /></label>
        <label>Email<input name="email" type="email" onChange={handleChange} /></label>
        <label>Message<textarea name="message" onChange={handleChange}></textarea></label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;