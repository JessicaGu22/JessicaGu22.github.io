const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "lavender",
];

const colorList = document.createElement("ul");

colors.forEach(color => {
  const listItem = document.createElement("li");
  listItem.innerText = color;
  listItem.style.color = color;
  colorList.appendChild(listItem);
});
document.body.appendChild(colorList);



