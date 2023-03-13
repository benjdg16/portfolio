import { ICard } from "../components/Card/Card";
import { TOOLS } from "../constants";

const cardData: Array<ICard> | Array<undefined> = [
  {
    application: "X",
    company: "X",
    date: "X",
    duration: "1 year",
    titles: ["Front end developer / Designer"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis volutpat leo vitae nisl euismod tincidunt.",
      "Fusce tempor mauris sit amet mi convallis, a bibendum libero egestas.",
      "Integer pharetra pellentesque risus, non porttitor eros commodo at.",
    ],
    chips: [TOOLS.AZURE, TOOLS.REACT],
  },
];

export { cardData };
