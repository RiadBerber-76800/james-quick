import React from "react";
// import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import VideoYoutube from "../components/VideoYoutube";
import HomeSectionCourse from "../components/HomeSectionCourse";
import Stream from "../components/Stream";

// Home Page


import Articles from "../components/Articles";
export default function Home() {
  return (
    <div className="container mx-auto">
      <div>
        <Presentation />
        <VideoYoutube />
        <HomeSectionCourse />
        <Stream />
        <Articles />
      
      </div>
    </div>
  );
}
