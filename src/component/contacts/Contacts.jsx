import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Rescontact.scss";
const Contacts = () => {
  const form = useRef();
  const sendemailhandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3q5taxr",
        "template_emkn7dt",
        form.current,
        "KBMQg1sNjxRv5YOQw"
      )
      .then(
        (result) => {
          toast("Submit succesfully");
          setTimeout(() => {
            toast("Thanks You So Much");
          }, 5000);
        },
        (error) => {
          toast("Please Check the Form Once Again");
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="contact-box">
        <h1>Our Contact</h1>
        <div className="contact-content">
          <form ref={form} className="Main-form" onSubmit={sendemailhandler}>
            <input
              type="name"
              name="user_name"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Please Enter your Email"
              required
            />
            <input
              type="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea name="message" id="texts" cols="30" rows="10"></textarea>
            <button type="submit" className="form-sub">
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Contacts;
