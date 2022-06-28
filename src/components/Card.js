import React from "react";
import styled from "styled-components";

export default function Card ({ src, titleCard, descriptionCard, dateCard, alt }) {
  return (
    <Cardcontainer>
      <div className="allblocks lg:flex mt-10">
        {/* image */}
        <div className="wrapper-img max-w-[350px]">
          <img src={src} alt={alt} className="" />
        </div>
        {/* description */}
        <div className="lg:ml-6">
          <h2 className="text-xl font-bold pt-5">{titleCard}</h2>
          <p>{descriptionCard}</p>
          <br />
          {/* /* date */}
          <p>{dateCard}</p>
        </div>
      </div>
    </Cardcontainer>
  );
}

const Cardcontainer = styled.main`

`