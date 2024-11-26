import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMes } from "../../slices/messagesSlice";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {
      dispatch(addMes({ name, email, subject, message }));
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("Please fill in all required fields.");
    }
  };
  return (
    <div className="container mt-5 col-lg-6 col-md-8 col-sm-10">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <form className="p-4 shadow rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control inp"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control inp"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            className="form-control inp"
            id="subject"
            placeholder="Enter subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="form-control inp"
            id="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={addTodoHandler}
          className="btn-send btn w-100 py-2"
        >
          Send Message
        </button>
      </form>

      <div className="mt-5 text-center">
        <h5>Connect with Me</h5>
        <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
          <a
            href="mailto:mashazbn@gmail.com"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              style={{ width: "40px" }}
            />
          </a>
          <a
            href="https://t.me/mashechka1222"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
              style={{ width: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
