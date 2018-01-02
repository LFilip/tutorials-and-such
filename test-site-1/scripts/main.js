

var myImage = document.querySelector('img');
var myHeading = document.querySelector("h1");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var myWidth = myImage.getAttribute('width');
    if(mySrc === 'images/kitten.jpg') {
      myImage.setAttribute ('src','images/dog.jpg');
        myHeading.textContent = 'HE LOVES PETS! He is a good boy!';
    } else {
      myImage.setAttribute ('src','images/kitten.jpg');
        myHeading.textContent = 'HE LOVES PETS TOO! Meow Meow!!';
      //  myImage.setAttribute ('width', myWidth + 10);
    }
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Kitties are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
