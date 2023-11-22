const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const alternativeText = {
    "pic1.jpg" : "A blue human eye zoomed in.",
    "pic2.jpg" : "Marble with light-brown, blue, and white patterns.",
    "pic3.jpg" : "White and purple flowers zoomed in.",
    "pic4.jpg" : "Egyptian drawings portraying history.",
    "pic5.jpg" : "Brown and white moth resting on a large leaf."
}

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
