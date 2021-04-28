// DOM selectors
const btn = document.querySelector('.accordion-button');
const body1 = document.querySelector('#body1');
const body2 = document.querySelector('#body2');
const body3 = document.querySelector('#body3');

// To fill the content from JSON file in the accordion body
const fillData = (body, content) => {
  let list = document.createElement('ul');
  list.classList.add('list-style');
  content.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    list.append(li);
  });

  body.append(list);
};

// To fetch data from JSON file asynchronously
const fetchData = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();
  const content1 = data[1];
  const content2 = data[2];
  const content3 = data[3];

  fillData(body1, content1);
  fillData(body2, content2);
  fillData(body3, content3);
};

// Calling function fetchData
fetchData();
