import React from "react";

import { TTool } from "../../constants";

import "./Chip.css";

interface IChip {
  type: TTool;
}

const Chip = ({ type }: IChip) => {
  // const getReadableType = (type: string) => {
  //   switch(type) {
  //     case ETools.AZURE: {
  //       return READABLE_TOOLS[ETools.AZURE]
  //     }

  //   }
  // }
  return (
    <div className={`chip ${type}`}>
      <span>{type.value}</span>
    </div>
  );
};

export default Chip;
