import React from "react";
import Card from "../components/Card";

export default function Blog() {

  // Creation des id des cards de la page blog

  const dataBlog = [
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
    {
      id: 11,
      titleCard:
        "Must Have SvelteKit Extension for VS Code - SvelteKit Snippets ",
      src: "/1.webp",
      descriptionCard:
        "SvelteKit is one of the best frameworks out there, and working with it just got much much easier!...",
      dateCard: "01/06/2022",
    },
    {
      id: 12,
      titleCard:
        "Annoucing Advent of JavaScript- A FREE series of JavaScript Challenges ",
      src: "/5.webp",
      descriptionCard:
        "Annoucing Advent of JavaScript- A FREE series of JavaScript Challenges...",
      dateCard: "12/08/2021",
    },
    {
      id: 13,
      titleCard: "100k Subscribers On Youtube - 5 Things i Learned ",
      src: "/6.webp",
      descriptionCard: "100k Subscribers On Youtube - 5 Things i Learned...",
      dateCard: "09/10/2021",
    },
  ];
  return (
    <div className="container mx-auto ">
      <h1 className="font-bold text-4xl pt-10 mx-22 pb-5 ">Blog</h1>
      <hr className="mx-1" />
      <div>
        <div className="">
          {dataBlog.map((item) => {
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
    </div>
  );
}
