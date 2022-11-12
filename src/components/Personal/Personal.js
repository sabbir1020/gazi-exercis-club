import React, { useEffect, useState } from "react";
import "./Personal.css";

const Personal = () => {
  const personalInfo = {
    _id: "636e52d04d71ebd10b6a992e",
    name: "Gazi sabbir ahammed",
    picture:
      "https://i.ibb.co/QFTPD0d/alexander-redl-d3b-Ymn-Z0ank-unsplash.jpg ",
    weigth: 48,
    height: 6.3,
    age: 23,
    gender: "male",
    email: "gazisabbir924@gmail.com",
    phone: "+1 (915) 505-3376",
  };

  return (
    <div className="">
      <div className="personal">
        <img src={personalInfo.picture} alt="" />
        <h5>{personalInfo.name}</h5>
      </div>
      <div className="peroson-body">
        <div>
          <h2>
            {personalInfo.weigth}
            <span>kg</span>
          </h2>
          <h4>Weigth</h4>
        </div>
        <div>
          <h2>{personalInfo.height} </h2>
          <h4>Height</h4>
        </div>
        <div>
          <h2>
            {personalInfo.weigth}
            <span>yrs</span>
          </h2>
          <h4>Age</h4>
        </div>
      </div>
    </div>
  );
};

export default Personal;
