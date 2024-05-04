

const li = document.createElement('li');
li.textContent = color;
ul.appendChild(listItem);
populateColorList();


const arr = ["#c0c0c0", "#800080", "#ffff00", "#0000ff", "#5f9ea0", "#008b8b", "#ff1493"];
const ul = document.createElement('ul');

arr.forEach(color => {
  const li = document.createElement('li'); 
  const innerTextOutput = document.getElementById("arr");
  innerTextOutput.value = arr.innerText;
  ul.appendChild(li); 
});

document.body.appendChild(ul); 

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



