import images from "./images";

const wines = [
  {
    title: "Latte",
    price: "$56",
    tags: "AU | cup",
  },
  {
    title: "Cappuccino",
    price: "$59",
    tags: "AU | cup",
  },
  {
    title: "Flat (White - Black)",
    price: "$44",
    tags: "FR | cup",
  },
  {
    title: "Mocha",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Caramel Cortado",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Lemonade",
    price: "$20",
    tags: "iced | soda | 30 ml",
  },
  {
    title: "Peach Iced Tea",
    price: "$16",
    tags: "iced | Slice of lemon",
  },
  {
    title: "Mango and Passion Fruit Cooler",
    price: "$10",
    tags: "iced | passtion fruit | Sugar",
  },
  {
    title: "Strawberry Lemonade",
    price: "$31",
    tags: "sugar | Strawberry | lemon",
  },
  {
    title: "Red Summer Berries fruit",
    price: "$26",
    tags: "Red barries | iced",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
