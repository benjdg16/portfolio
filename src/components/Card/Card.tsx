import React from "react";

import { TOOLS, TTool } from "../../constants";
import Chip from "../Chip";

import "./Card.css";

export interface ICard {
  application: string;
  company: string;
  date: string;
  duration?: string;
  titles: string[];
  description: string[];
  chips: Array<TTool>;
}

const Card = ({
  application,
  company,
  date,
  duration,
  titles,
  description,
  chips,
}: ICard) => {
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
          <div className="card-header-application">{application}</div>
          <div className="card-header-company">{company}</div>
        </div>
        <div className="card-header-right">
          <div className="card-header-date">
            <span id="date">{date}</span>
            <span id="duration">{duration}</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-titles">
          {titles.map((description, index) => (
            <span key={index}>
              {description}
              <br />
            </span>
          ))}
        </div>
        <ul className="card-body-description-ul">
          {description.map((description, index) => (
            <li key={index} className="card-body-description-li">
              {description}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        {chips.map((chip, index) => (
          <Chip key={index} type={chip} />
        ))}
        {/* <Chip />
        <Chip />
        <Chip /> */}
      </div>
    </div>
  );
};

export default Card;
