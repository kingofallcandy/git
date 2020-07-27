import React from "react";
import ProfileImage from "../../../static/assets/images/bio/this_kinda_looks_like_me_border.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column"  
      style={{
          background: "url(" + ProfileImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      scr={Image}/>
      
      <div className="right-column2">
        <div className="contact-bullets">
        <ul>
          <li>  
            <div className="icon">
              <FontAwesomeIcon icon="phone-square-alt"/>
              DONT CALL ME  
            </div>        
          </li>
          <li>  
            <div className="icon">
              <FontAwesomeIcon icon="envelope"/>
              DONTEMAILME@NOTAREALEMAIL.COM
            </div>
          </li>
          <li>
          <div className="icon">
            <FontAwesomeIcon icon="home"/>
            DONTFINDMEORMYCOMPANDY ZIP
          </div>
          </li>
        </ul>  
      </div>
    </div>
    </div>
  );
}