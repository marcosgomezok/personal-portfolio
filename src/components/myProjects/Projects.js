import React, { useState } from 'react'
import {lastProjects } from '../../store/data/dataProjects';
import './projects.css'

export const Projects = ({translate}) => {

  const {title:title1,description:desc1,imgdesktop:img1desktop,imgmobile:img1mobile,link:link1,shortLink:shortLink1} = lastProjects[0]
  const {title:title2,description:desc2,imgdesktop:img2desktop,imgmobile:img2mobile,link:link2,shortLink:shortLink2} = lastProjects[1]
  const {title:title3,description:desc3,imgdesktop:img3desktop,imgmobile:img3mobile,link:link3,shortLink:shortLink3} = lastProjects[2]

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);

  const [img1, setImg1] = useState(img1desktop);

  const handleChange1 = () => {
    if (check1 === true) {
      if (img1 === img1desktop) {
        setImg1(img1mobile);
      } else {
        setImg1(img1desktop);
      }
    } else {
      setCheck1(true);
      setCheck2(false);
      setCheck3(false);
    }
  };

  const [img2, setImg2] = useState(img2desktop);
   
  const handleChange2 = () => {
    if (check2) {
       if (img2 === img2desktop) {
        setImg2(img2mobile);
      } else {
        setImg2(img2desktop);
      }
    } else {
      setCheck1(false);
      setCheck2(true);
      setCheck3(false);
    }
  };

  const [img3, setImg3] = useState(img3desktop);

  const handleChange3 = () => {
    if (check3) {
      if (img3 === img3desktop) {
        setImg3(img3mobile);
      } else {
        setImg3(img3desktop);
      }
    } else {
      setCheck1(false);
      setCheck2(false);
      setCheck3(true);
    }
  };
 
     return (
        <div className="container">
            <h1 className="titleProjects">{translate('projects.title')}</h1>
            <input type="radio" name="slider" id="item-1"/>
            <input type="radio" name="slider" id="item-2"/>
            <input type="radio" name="slider" id="item-3"defaultChecked/>
            <div className="cards">
                <label className="card" htmlFor="item-1" id="img-1" onClick={handleChange1}>
                    <img className={(img1===img1desktop)?"animate__animated animate__ animate__flipInX":"animate__animated animate__ animate__flipInY"} src={img1} alt="song"/>
                </label>
                <label className="card" htmlFor="item-2" id="img-2" onClick={handleChange2}>
                    <img className={(img2===img2desktop)?"animate__animated animate__ animate__flipInX":"animate__animated animate__ animate__flipInY"} src={img2} alt="song"/>
                </label>
                <label className="card" htmlFor="item-3" id="img-3" onClick={handleChange3}>
                    <img className={(img3===img3desktop)?"animate__animated animate__ animate__flipInX":"animate__animated animate__ animate__flipInY"} src={img3} alt="song"/>
                </label>
            </div>
            <div className="infoBox">
                <div className="upper-part">
                <div className="info-area" id="sections">
                    <label className="projectInfo">
                    <div className="title">{translate(title1)}</div> 
                    <div className="sub-line">
                        <div className="subtitle">{translate(desc1)}<p><a className="projectLink"href={link1} target="_blank" rel="noreferrer">{shortLink1}</a></p></div>                        
                    </div>
                    </label>
                    <label className="projectInfo">
                    <div className="title">{translate(title2)}</div>
                    <div className="sub-line">
                        <div className="subtitle">{translate(desc2)}<p><a className="projectLink"href={link2} target="_blank" rel="noreferrer">{shortLink2}</a></p></div>                       
                    </div>
                    </label>
                    <label className="projectInfo">
                    <div className="title">{translate(title3)}</div>
                    <div className="sub-line">
                        <div className="subtitle">{translate(desc3)}<p><a className="projectLink"href={link3} target="_blank" rel="noreferrer">{shortLink3}</a></p></div>                     
                    </div>
                    </label>
                </div>
                </div>
            </div>
        </div>
    )
}
