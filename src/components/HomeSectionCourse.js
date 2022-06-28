import React from "react";
import styled from "styled-components";
import Card from "./Card";

// Section Cours page Home

export default function HomeSectionCourse() {

// Creation des id section cours page home

  const dataCourse = [
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
  ];
  return (
    <SectionCours>
      <div className="lg:container ">
        <h2 className="text-3xl pt-20">
          I create{" "}
          <span className="text-red-700 font-bold underline">COURSES</span>
        </h2>
        <p className="pt-4">
          I love to teach, and I've create courses on Web Development,
          JavaScript, React, and more. I love being able to put the things I've
          learned into a package for others to learn from.
        </p>
        <div className="">
          {dataCourse.map((item) => {
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
    </SectionCours>
  );
}
const SectionCours = styled.section``;
