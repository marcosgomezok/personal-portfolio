import React from "react";
import "./skillcard.css";

export const SkillCard = ({ translate, id, name, level, img }) => {
  return (
    <div>
      <div key={id} className="columns portfolio-item">
        <div className="item-wrap">
          <div className="imgskills">

          <img alt="imgs" src={img} />
          </div>
          <div className="skilltitle" style={{ textAlign: "center" }}>
            {translate(name)}
          </div>
          <div className="skillstars" style={{ textAlign: "center" }}>
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};
