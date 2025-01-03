"use strict";

let element = document.querySelector('banner');
let strong = document.createElement("strong");
element.appendChild(strong);
let span = document.createElement("span");

strong.before(span);

console.log(container.outerHTML);


// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
console.log(stars);


// Funtion to update rating
function starClick(n) {
     
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
