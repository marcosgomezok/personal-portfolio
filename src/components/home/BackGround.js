import React from "react";
import backgroundVideo from "../../store/video/video1.mp4";
import "./background.css";

export const BackGround = () => {
  return (
    <div className="background">
      <video className="video" src={backgroundVideo} autoPlay loop muted />
    </div>
  );
};
