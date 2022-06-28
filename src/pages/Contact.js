import React from "react";
import "../components/ContactForm.css";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl pt-10 pb-5 lg:mx-22">Contact</h1>
      <hr />
      <p className="mx-22 pt-8">
        Interested in having me <span className="font-bold">speak</span> at your
        event? Creating and/ or <span className="font-bold"> teaching</span>{" "}
        content? Have a suggestion for content? Maybe just a general question? I
        would love to hear from you.
      </p>
      <div className="contact">
        <div>
          <form name="contact" className="contact__form">
            <input
              className="outline-none lg:p-4 "
              type="text"
              name="name"
              placeholder="Nom:"
            />
            <input className="outline-none lg:p-4"
              type="email"
              name="email"
              placeholder="Email:"
            />
            <textarea
              name="message"
              placeholder="Please include any relevant details with your request. Dates, times, location, etc."
              className="outline-none h-48 min-h-full p-4 "
            ></textarea>
            <button type="submit" className="uppercase lg:p-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
