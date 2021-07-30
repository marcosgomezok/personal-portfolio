import React from "react";
import FadeIn from "react-fade-in";
import "./home.css";

export const Home = ({ translate }) => {
  return (
    <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <FadeIn delay={100}>
            <h1 className="responsive-headline">
              {translate("home.greeting")}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <h3 className="responsive-headline">
              {translate("home.ocupation")}
            </h3>
            <hr />
          </FadeIn>
        </div>
      </div>
    </header>
  );
};
