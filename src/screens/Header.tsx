import React from "react";
import background from "../assets/img/Component 12 – 1@2x2.png";
import "../styles/mobile/header.css";
import "../styles/desktop/header.css";
import { Menu } from "../components/Menu";
import { Bust } from "../components/Bust";
import { DesktopMenu } from "../components/DesktopMenu";

export interface NoScroll {
  setClassNoScroll: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ setClassNoScroll }: NoScroll) => {
  const scrollToComponent = (vh: number, px: number = 0) => {
    const { innerHeight, scrollTo } = window;

    setTimeout(() => {
      scrollTo({
        top: innerHeight * vh + px,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <div className="header">
      <Menu
        setClassNoScroll={setClassNoScroll}
        scrollToComponent={scrollToComponent}
      />
      <Bust />
      <div className="background">
        <img src={background} alt="background" />
      </div>
      <span className="name">
        <strong className="hi">Hi, my</strong> name is <strong>Arek</strong>
        <span className="description">
          I'm a <strong>self-taught frontend developer</strong> from Pomorskie,
          Poland.
        </span>
      </span>
      <span className="scroll" />
      <div className="scroll" />
      <DesktopMenu scrollToComponent={scrollToComponent} />
    </div>
  );
};
