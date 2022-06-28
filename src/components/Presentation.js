import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Section présentation page home

export default function Presentation() {
  return (
    <div className="lg:container mx-auto">
      <div className="flex justify-center ">
        <div className="">
          <h2 className="text-3xl pt-10">Hi, I'm James</h2>
          <p className="pt-3 ">
            I'm a Fullstack Web Developer who is addicted to learning and loves
            working with people. I live by the motto
            <span className="font-bold"> Learn Build Teach,</span> so I’m
            excited to share the things I learn with you!
          </p>
          {/* Import logos font awesome pour React */}
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-red-600 text-4xl p-6 mx- px-1 "
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-blue-600 text-4xl p-6"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-red-600 text-4xl p-6 px-1"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTwitch}
            className="text-purple-900 text-4xl p-6 px-7"
          ></FontAwesomeIcon>
        </div>
        <div className="hidden lg:block">
          <img
            src="headshot.webp"
            alt="Photo de James"
            className="rounded-full w-60"
          />
        </div>
      </div>
    </div>
  );
}

const SectionPresentation = styled.section`
`;
