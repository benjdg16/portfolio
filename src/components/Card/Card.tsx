import React from "react";

import Chip from "../Chip";

import "./Card.css";

const Card = () => {
  const descriptionList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Duis volutpat leo vitae nisl euismod tincidunt.",
    "Fusce tempor mauris sit amet mi convallis, a bibendum libero egestas.",
    "Integer pharetra pellentesque risus, non porttitor eros commodo at.",
  ];
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <div className="card-header-application">Digital Walker</div>
          <div className="card-header-company">Accenture Inc.</div>
        </div>
        <div className="card-header-right">
          <div className="card-header-date">
            <span id="date">Jan. 2019</span>
            <span id="duration">1 year</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-titles">Front-end developer / Designer</div>
        <ul className="card-body-description-ul">
          {descriptionList.map((description, index) => (
            <li key={index} className="card-body-description-li">
              {description}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <Chip />
        <Chip />
        <Chip />
      </div>
    </div>
  );
};
// Card.displayName = "SwiperSlide";
export default Card;
