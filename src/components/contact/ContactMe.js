import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";
import "./contactme.css";
import { dataNetworks, dataColaboration } from "../../store/data/dataSocial";

export const ContactMe = ({ translate }) => {
  const [done, setDone] = useState(true);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        e.target.reset();
        setDone(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="finalcss">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>.</h1>
        </div>
        <div className="ten columns header-col">
          <p className="lead">{translate("contact.title")}</p>
        </div>
      </div>
      <div className="row centercontact">
        <div className="eight columns">
          <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  {translate("contact.name")}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  {translate("contact.email")}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="100"
                  id="contactEmail"
                  name="contactEmail"
                />
              </div>
              <div>
                <label htmlFor="contactSubject">
                  {translate("contact.subject")}
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="100"
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  {translate("contact.message")}{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  cols="100"
                  rows="10"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>
              <div>
                <label />
                {done ? (
                  <button className="submit" type="submit">
                    {translate("contact.submit")}
                  </button>
                ) : (
                  <div id="message-success">
                    {translate("contact.messagedone")}
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </div>
        <aside className="four columns">
          <div className="widget widget_contact ">
            <h4>{translate("aboutme.contactTitle")}</h4>
            <p className="address">
              <span className="spanBold">
                {translate("aboutme.contactInformationLabel")}
              </span>
              <span>{translate("aboutme.contactInformation")}</span>
              <br />
              <span className="spanBold">
                {translate("aboutme.contactStreetLabel")}
              </span>
              <span>{translate("aboutme.contactStreet")}</span>
              <br />
              <span className="spanBold">
                {translate("aboutme.contactCityLabel")}
              </span>
              <span>{translate("aboutme.contactCity")}</span>
              <br />
            </p>
          </div>
          <div className="widget widget_tweets">
            <h4 className="widget-title">
              {translate("contact.socialNetworks")}
            </h4>
            <span>{translate("contact.socialInfo")}</span>
            <span className="socialNetworks">
              {dataNetworks.map((network) => (
                <SocialIcon
                  className="socialIcon"
                  key={network.id}
                  url={network.url}
                  bgColor="#fff"
                  style={{ height: 100, width: 100 }}
                  target="_blank"
                  rel="noreferrer"
                />
              ))}
            </span>
            <span className="titleCoffe">
              {translate("contact.sendcoffe")}

              {dataColaboration.map((colab) => (
                <SocialIcon
                  className="socialIcon"
                  key={colab.id}
                  url={colab.url}
                  bgColor="#fff"
                  style={{ height: 100, width: 100 }}
                  target="_blank"
                  rel="noreferrer"
                />
              ))}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
};
