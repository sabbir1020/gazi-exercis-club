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
    <div className="personal">
      {/* <img src={personalInfo.picture} alt="" /> */}
      <h2>{personalInfo.name}</h2>
      <h4>weigth {personalInfo.weigth}</h4>
    </div>
  );
};

export default Personal;
