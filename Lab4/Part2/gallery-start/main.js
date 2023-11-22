const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alternativeText = {
    "pic1.jpg" : "A blue human eye zoomed in.",
    "pic2.jpg" : "Marble with light-brown, blue, and white patterns.",
    "pic3.jpg" : "White and purple flowers zoomed in.",
    "pic4.jpg" : "Egyptian drawings portraying history.",
    "pic5.jpg" : "Brown and white moth resting on a large leaf."
}

/* Looping through images */
/* Loop and create a new img element, set its src and alt attributes to a placeholder value, 
append new img element inside thumbBar */

for (let i=1; i<=5; i++) {
    //create new img element
    const newImage = document.createElement('img');
    //Replace src and alt placeholder values
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    newImage/setAttribute('alt', alternativeText[i-1]);
    //Append new img inside thumbBar
    thumbBar.appendChild(newImage);
    //Add a click event listener
    newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
// Add a click event listener, use getAttribute for class name 
btn.addEventListener('click', () =>  { const buttonClass = btn.getAttribute('class');
//if class is 'dark', change to 'light'
if(buttonClass === 'dark'){
    btn.setAttribute('class', 'light');
    //Change text content to 'Lighten'
    btn.textContent = 'Lighten';
    //Change background color of the overlay <div> to "rgba(0,0,0,0.5)"
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
    //If class is not dark, change to dark
    btn.setAttribute('class', 'dark');
    //Change text content to 'Darken'
    btn.textContent = 'Darken';
    //Change background color of the overlay <div> to "rgba(0,0,0,0)"
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
});
