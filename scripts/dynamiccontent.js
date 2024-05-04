const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "lavender",
  "brown"
];

const colorList = document.createElement("ul");

colors.forEach(color => {
  const listItem = document.createElement("li");
  listItem.innerText = color;
  listItem.style.color = color;
  colorList.appendChild(listItem);
});
document.body.appendChild(colorList);



