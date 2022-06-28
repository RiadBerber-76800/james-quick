import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import{faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

// Footer

function Footer() {
  return (
    <footer>
      <WrapperFooter>
        <div className="">
            <hr />
          <h2 className="text-2xl pt-6">
            @james<span className="font-bold">q</span>quick{" "}
          </h2>
          {/* Import des logo sur fontawesom pour React */}
          
          <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-4xl p-6" ></FontAwesomeIcon >
          <FontAwesomeIcon icon={faTwitter} className="text-blue-600 text-4xl p-6" ></FontAwesomeIcon>
          <FontAwesomeIcon icon= {faInstagram} className="text-red-600 text-4xl p-6" ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitch} className="text-purple-900 text-4xl p-6" ></FontAwesomeIcon>
          <p>Built with <span className="text-red-700 font-bold">Gatsby</span>. Data from <span className="text-red-700 font-bold">Sanity.io</span>. hosted on <span className="text-red-700 font-bold">Netlify</span></p>
        </div>
      </WrapperFooter>
    </footer>
  );
}

export default Footer;



const WrapperFooter = styled.footer`
  width: 100%;
  bottom: 0;
  /* color: #fff; */
  text-align: center;
  margin-top: 80px;
  hr{
    margin-left: 300px;
    margin-right: 300px;
  }
 
`;
