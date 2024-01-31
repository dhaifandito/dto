"use client";

import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Article from "./components/Article";
import ImageSlider2 from "./components/ImageSlider2";
import About from "./components/About";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  let backColor;
  let textColor;
  let otherColor;

  if (theme === "dark") {
    backColor = "#F8F9FA";
    textColor = "#343A40";
    otherColor = "#508080";
  } else {
    backColor = "#2C3E50";
    textColor = "#D3D3D3";
    otherColor = "#87AE73";
  }

  return (
    <div
      style={{ backgroundColor: backColor, color: textColor }}
      className="font-mono h-full"
    >
      <Navigation theme={theme} setTheme={setTheme} otherColor={otherColor} />
      {/* <div className="grid grid-cols-4">
        <div className="grid grid-cols-subgrid gap-4 col-span-3"> */}
        <div>
          <div className="flex flex-col">
            <Banner otherColor={otherColor} textColor={textColor} />
            <About otherColor={otherColor} textColor={textColor} />
            <Article otherColor={otherColor} textColor={textColor} />
            <ImageSlider2 otherColor={otherColor} textColor={textColor} />
          </div>
        </div>
       {/* <Sidebar otherColor={otherColor} textColor={textColor} backColor={backColor} theme={theme} />
      </div> */}
      <Footer otherColor={otherColor} backColor={backColor} />
    </div>
  );
}
