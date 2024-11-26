import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-content container text-center mt-5">
      <h1 className="mt-5">Hey 👋 I'm</h1>
      <img className="myImg" src="myImg.jpg" alt="Mariia Zhbadynska" />
      <h2 className="fw-bold">Mariia Zhbadynska</h2>
      <p>Web Developer</p>
      <a href="resume.pdf" className="btn btn-primary" download>
        Download my CV
      </a>

      <div className="svgs mt-4">
        <a href="https://t.me/mashechka1222">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png"
            alt="Telegram"
          />
        </a>
        <a href="https://github.com/MariaZhbadynska">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
