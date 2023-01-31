import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let`s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          iure mollitia vitae labore repudiandae, odit laboriosam eum saepe
          laudantium itaque autem? Inventore, at!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 people requsted blya</p>
        </div>
        <div className="qpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
