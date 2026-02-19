const synonyms = ["naim", "rahat", "ayan"];
const createElement = (arr) => {
  const htmlElement = arr.map((el) => `<span>${el}</span>`);
  console.log(htmlElement.join(" "));
};
createElement(synonyms);
