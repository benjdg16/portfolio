import { TTool } from "../../constants";

import "./Chip.css";

interface IChip {
  type: TTool;
}

const Chip = ({ type }: IChip) => {
  return (
    <div className={`chip ${type}`}>
      <span>{type.value}</span>
    </div>
  );
};

export default Chip;
