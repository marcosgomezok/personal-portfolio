import React from "react";
import { Link } from "react-scroll";
import img from "../../store/images/about/img.png";
import "./aboutme.css";

export const AboutMe = ({ translate }) => {
  return (
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={img} alt="Profile Pic" />
      </div>
      <div className="nine columns main-col">
        <h2>{translate("aboutme.title")}</h2>
        <p>{translate("aboutme.description")}</p>
        <p>{translate("aboutme.description2")}</p>
        <p>{translate("aboutme.description3")}</p>
        <p>{translate("aboutme.description4")}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>{translate("aboutme.contactTitle")}</h2>
            <p className="address">
              <span className="spanBold">
                {translate("aboutme.contactInformationLabel")}
              </span>
              <span>{translate("aboutme.contactInformation")}</span>
              <br />
              <span>
                <span className="spanBold">
                  {translate("aboutme.contactStreetLabel")}
                </span>
                <span>{translate("aboutme.contactStreet")}</span>
                <br />
                <span className="spanBold">
                  {translate("aboutme.contactCityLabel")}
                </span>
                <span>{translate("aboutme.contactCity")}</span>
              </span>
            </p>
          </div>
          <div className="columns moreinfo">
            <p>
              <Link className="button" to="section fifth" offset={0}>
                {translate("aboutme.moreInfo")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
