import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Courses() {

// Création des id des cars de la page Cours

  const dataCourses = [
    {
      id: 1,
      titleCard: "React and Serverless - Fullstack Development",
      src: "7.png",
      descriptionCard:
        "Learn to build a secure and production- ready fullstack application from star to finish. By then end...",
      dateCard: "05/27/2020",
    },
    {
      id: 2,
      titleCard: "Build a Quiz App with HTML, CSS, and JavaScript",
      src: "/18.png",
      descriptionCard:
        "Want to improve your core Web Development skills? Want to improve your knowledge of HTML, CSS, and JavaScript",
      dateCard: "02/18/2019",
    },
    {
      id: 3,
      titleCard: "Learn Visual Studio Code",
      src: "/24.png",
      descriptionCard:
        "Improve your efficiency and proficiency as a developer by learning everything you need to know about...",

      dateCard: "11/26/2018",
    },
    {
      id: 10,
      titleCard: "Design and Build a Chat App with Socket.io",
      src: "/23.png",
      descriptionCard:
        "Learn design and build a chat application using Node and Socket.io by using modern Weeb features: Fle...",

      dateCard: "05/02/2018",
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl pt-10 pb-5 mx-22">Courses</h1>
      <hr className="lg:mx-1 pt-8" />
      <p className="mx-22 pt-2">
        I've taight tens of thousands of students in person and on line. I've
        got a passion for Web Development that I want to share with you!
      </p>
      <br />
      <h2 className="text-2xl font-bold mx-22 pt-10">
        Learn Fullstack Web Development
      </h2>
      <p className="mx-22 pt-7">
        Here's a few topics I can help you get better at.
      </p>
      <ul className="mx-10 pt-7 list-disc">
        <li>Fronted Development</li>
        <li>Backend Development</li>
        <li>Web Design</li>
        <li>Developer Tools</li>
        <li>People Skills</li>
        <li>Career Development</li>
      </ul>
      <div>
        <div className="">
          {dataCourses.map((item) => {
            return (
              <Card
              key={item.id}
                titleCard={item.titleCard}
                src={item.src}
                descriptionCard={item.descriptionCard}
                dateCard={item.dateCard}
              />
            );
          })}
        </div>
      </div>
      <h2 className="text-3xl font-bold mx-22 pt-20">
        Looking for Custom Content?
      </h2>
      <p className="mx-22 pt-3">
        I often get requests to create custom content like individual courses,
        one-off videos, articles, etc. If you're interested in something,
        contact me and include all of the necessary details.
      </p>
      <div className="text-center pt-20">
        <Link to="../contact">
          <button className="bg-red-600 text-white uppercase  rounded-3xl p-3 ">
            Contact me!
          </button>
        </Link>
      </div>
    </div>
  );
}
