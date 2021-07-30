import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/navbar/Navbar";
import { BackGround } from "../components/home/BackGround";
import { Home } from "../components/home/Home";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { SkillsList } from "../components/skills/SkillsList";
import { Projects } from "../components/myProjects/Projects";
import { ContactMe } from "../components/contact/ContactMe";
import { Footer } from "../components/footer/Footer";
import "./mainscreen.css";

export const MainScreen = () => {

  const { t: translation, i18n } = useTranslation("global");
  
  return (
    <div>
      <Navbar translate={translation} i18n={i18n} />
      <BackGround />
      <section className="section first" id="home-section"><Home translate={translation} /></section>
      <section className="section second" id="about"><AboutMe translate={translation} /></section>
      <section className="section third" id="portfolio"><SkillsList translate={translation} /></section>
      <section className="section quarter" id="projects"><Projects translate={translation} /></section>
      <section className="section fifth" id="contact"><ContactMe translate={translation} /></section>
      <section className="section sixth" id="footer"><Footer translate={translation} /></section>
    </div>
  );
};
