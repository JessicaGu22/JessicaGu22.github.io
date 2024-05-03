let li = document.createElement('li');
li.textContent = color;
ul.appendChild(listItem);
populateColorList();


let arr = ["#c0c0c0", "#800080", "#ffff00", "#0000ff", "#5f9ea0", "#008b8b", "#ff1493"];
let ul = document.createElement('ul');

arr.forEach(color => {
  let li = document.createElement('li'); 
  li.textContent = color; 
  ul.appendChild(li); 
});

document.body.appendChild(ul); 



