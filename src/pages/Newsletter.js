import React from "react";
import "../components/ContactForm.css";

export default function Newsletter() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl pt-10 pb-5 lg:mx-22">Newsletter</h1>
      <hr />
      <p className="lg:mx-22 pt-8">
        Subscribe to learn more about{" "}
        <span className="font-bold">Web Development, Design,</span> and{" "}
        <span className="font-bold">Developer Tools.</span> I love to share, so
        here's what you can expect from this newsletter.
      </p>
      <ul className="mx-10 pt-8 list-disc">
        <li>Latest Videos and Articles</li>
        <li>Live Strams and Webinars</li>
        <li>Course Announcements and Discounts</li>
        <li>Career Development Tips</li>
      </ul>
      <div className="contact pt-8">
        <form name="contact" method="post" className="contact__form">
          <input
            type="email"
            name="email"
            placeholder="Email:"
            className="outline-none lg:p-4"
          />
          <button className="uppercase lg:p-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
