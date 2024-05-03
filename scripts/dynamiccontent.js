

const li = document.createElement('li');
li.textContent = color;
ul.appendChild(listItem);
populateColorList();


const arr = ["#c0c0c0", "#800080", "#ffff00", "#0000ff", "#5f9ea0", "#008b8b", "#ff1493"];
const ul = document.createElement('ul');

arr.forEach(color => {
  const li = document.createElement('li'); 
  li.textContent = color; 
  ul.appendChild(li); 
});

document.body.appendChild(ul); 



