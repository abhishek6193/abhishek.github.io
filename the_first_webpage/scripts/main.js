var myHeading = document.querySelector('h1');
myHeading.textContent = 'ABHISHEK KHANNA!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/WP_20150805_11_31_26_Selfie.jpg') {
      myImage.setAttribute ('src','images/IMG-20161227-WA0010.jpg');
    } else {
      myImage.setAttribute ('src','images/WP_20150805_11_31_26_Selfie.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Abhishek welcomes, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Abhishek welcomes, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}