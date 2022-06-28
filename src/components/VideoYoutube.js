import React from "react";
import styled from "styled-components";
import CardYoutube from "./CardYoutube";

// Section Video page Home

export default function VideoYoutube() {
  return (
    <div className="lg:container mx-auto">
      <div>
        <h2 className="text-3xl pt-20">
          I do videos on{" "}
          <span className="text-red-700 font-bold underline">YOUTUBE</span>
        </h2>
        <p className="pt-4">
          With hundreds of videos and over 10,000 subscribers, I've been
          creating YouTube videos for about 7 years. I create weekly videos on
          Web Development.
        </p>
      </div>
      <div className="lg:flex lg:space-x-5 pt-20">
        {/* Import des Cards section video youtube page home */}
        <CardYoutube src="/111.png" />
        <CardYoutube src="/1fd4c2b1693842f1bfe33bae6fa19ff993556a35-1280x720 (1).png" />
        <CardYoutube src="/13.png" />
      </div>
    </div>
  );
}
const SectionVideo = styled.section``;
