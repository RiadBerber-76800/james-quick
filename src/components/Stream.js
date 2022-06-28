import React from "react";
import styled from "styled-components";
import Card from "./Card";

// Section Stream Twitch page home

export default function Stream() {

  // Création des id pour les Cards de la section Stream Twitch de la page home
  const dataStream = [
    {
      id: 4,
      titleCard: "College + Career Find Your Passion with Alexandria Pigram",
      src: "/19.png",
      descriptionCard: "",
      dateCard: "05/27/2020",
    },
    {
      id: 5,
      titleCard: "Autocomplete with Algolia with Bryan Robinson",
      src: "/8.png",
      descriptionCard: "",
      dateCard: "11/12/2021",
    },
    {
      id: 6,
      titleCard: "From Vue to React with Debbie O'Brien",
      src: "/15.png",
      descriptionCard: "",
      dateCard: "11/05/2021",
    },
  ];
  return (
    <div className="lg:container mx-auto">
      <h2 className="text-3xl pt-20">
        I live stream on
        <span className="text-red-700 font-bold underline"> Twitch</span>
      </h2>
      <p className="pt-4">
        I love to teach, and I've create courses on Web Development, JavaScript,
        React, and more. I love being able to put the things I've learned into a
        package for others to learn from.
      </p>
      <div className="">
        {dataStream.map((item) => {
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
const SectionStream = styled.section`

`;
