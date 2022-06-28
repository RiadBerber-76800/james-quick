import React from "react";
import styled from "styled-components";
import Card from "./Card";

// Section Articles page home

export default function Articles() {
  // Création des id pour les Cards Articles
  const dataArticles = [
    {
      id: 7,
      titleCard: "Top 5 Struggles of a Developêr Advocate",
      src: "/2.webp",
      descriptionCard:
        "Let's look at the top 5 struggles I have as a Developer",
      dateCard: "05/27/2020",
    },
    {
      id: 8,
      titleCard: "My Terminal Has SUPER Powers",
      src: "/3.webp",
      descriptionCard:
        "This plugin is amazing! I recently tried the Fig.io plugin for my terminal and it is AWESOME. You ca...",
      dateCard: "01/25/2022",
    },
    {
      id: 9,
      titleCard: "Goals for 2022",
      src: "/4.webp",
      descriptionCard: "I'm so excited and optimistic for 2022!",
      dateCard: "01/07/2022",
    },
  ];
  return (
    <div className="lg:container mx-auto">
      <h2 className="text-3xl pt-20">
        I write
        <span className="text-red-700 font-bold underline"> Articles</span>
      </h2>
      <p></p>
      <div className="">
        {dataArticles.map((item) => {
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
  );
}
const SectionArticles = styled.section`
  /* img {
    width: 430px;
    margin-left: 120px;
    margin-top: 50px;
  }
  h2 {
    margin-top: 50px;
    margin-left: 120px;
  }
  h3 {
    margin-top: 100px;
    margin-left: 20px;
  }
  p {
    margin-left: 120px;
    margin-top: 10px;
  }
  .description {
    margin-left: 20px;
  } */
`;
