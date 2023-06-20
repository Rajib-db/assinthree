// 1.Date Object:
// function getDayOfWeek(dateString) {
//     const date = new Date(dateString);
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[date.getDay()];
// }

// const result = getDayOfWeek('2023-06-20');
// console.log(result); // Output: "Tuesday"

// 2.Math Object:
// function squareRootOfSumOfSquares(numbers) {
//     const sumOfSquares = numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);
//     const squareRoot = Math.sqrt(sumOfSquares);
    
//     return squareRoot;
// }

// const numbers = [2, 4, 6, 8];
// const result = squareRootOfSumOfSquares(numbers);
// console.log(result);

// 3.Numbers:
// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
// }

// const number = 13;
// const result = isPrime(number);
// console.log(result); 

// 4.Window Object:
// function openWindow(url, width, height) {
//     const windowFeatures = `width=${width},height=${height}`;
//     window.open(url, '_blank', windowFeatures);
// }

// openWindow('https://www.example.com', 800, 600);

// Navigator Object:
// function getBrowserInfo() {
//     const userAgent = navigator.userAgent;
//     const browserInfo = {};
  
//     if (userAgent.indexOf('Firefox') !== -1) {
//       browserInfo.name = 'Firefox';
//       browserInfo.version = userAgent.match(/Firefox\/([\d.]+)/)[1];
//     } else if (userAgent.indexOf('Chrome') !== -1) {
//       browserInfo.name = 'Chrome';
//       browserInfo.version = userAgent.match(/Chrome\/([\d.]+)/)[1];
//     } else if (userAgent.indexOf('Safari') !== -1) {
//       browserInfo.name = 'Safari';
//       browserInfo.version = userAgent.match(/Version\/([\d.]+)/)[1];
//     } else if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR/') !== -1) {
//       browserInfo.name = 'Opera';
//       browserInfo.version = userAgent.match(/(?:Opera|OPR)\/([\d.]+)/)[1];
//     } else if (userAgent.indexOf('Trident/') !== -1) {
//       browserInfo.name = 'Internet Explorer';
//       browserInfo.version = userAgent.match(/Trident\/([\d.]+)/)[1];
//     } else {
//       browserInfo.name = 'Unknown';
//       browserInfo.version = 'Unknown';
//     }
  
//     return browserInfo;
// }

// const browserInfo = getBrowserInfo();
// console.log(browserInfo.name);     
// console.log(browserInfo.version); 

// 6.Geolocation:
// function getCurrentLocation() {
//     return new Promise((resolve, reject) => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             resolve({ latitude, longitude });
//           },
//           error => {
//             reject(error.message);
//           }
//         );
//       } else {
//         reject('Geolocation is not supported by this browser.');
//       }
//     });
//   }
  
//   // Example usage:
//   getCurrentLocation()
//     .then(location => {
//       console.log('Latitude:', location.latitude);
//       console.log('Longitude:', location.longitude);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

// 7.JS Common Events:
// function changeImageSource() {
//     const image = document.getElementById('myImage');
//     image.src = './img/img1.jpg';
//   }

//   function restoreImageSource() {
//     const image = document.getElementById('myImage');
//     image.src = './img/img2.jpg';
//   }

// 8.HTML DOM Document:
// function changeText() {
//     var paragraph = document.getElementById("myParagraph");
//     paragraph.textContent = "Button Clicked!";
// }

// 9.JS DOM Working with Form Input:
// var form = document.getElementById('myForm');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent form submission

//   var nameInput = document.getElementById('nameInput');
//   var emailInput = document.getElementById('emailInput');
//   var passwordInput = document.getElementById('passwordInput');
//   var confirmPasswordInput = document.getElementById('confirmPasswordInput');

//   // Accessing input values
//   var name = nameInput.value;
//   var email = emailInput.value;
//   var password = passwordInput.value;
//   var confirmPassword = confirmPasswordInput.value;

//   // Perform form validation
//   if (name === "") {
//     alert("Name field cannot be empty");
//     return;
//   }

//   if (!/^[a-zA-Z]+$/.test(name)) {
//     alert("Name field should contain only letters");
//     return;
//   }

//   if (!validateEmail(email)) {
//     alert("Invalid email address");
//     return;
//   }

//   if (!validatePassword(password)) {
//     alert("Invalid password");
//     return;
//   }

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   // Perform actions with the form data
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Password:', password);

//   // Additional actions can be performed here
// }

// function validateEmail(email) {
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function validatePassword(password) {
//   var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   return passwordRegex.test(password);
// }

// 10.DOM Manipulate CSS Class:
// var button = document.getElementById('myButton');
//     var paragraph = document.getElementById('myText');

//     button.addEventListener('click', function() {
//     paragraph.classList.add('highlight');
// });

// 11.Create Element & Append Element:
// var list = document.getElementById('myList');

//     for (var i = 1; i <= 5; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = i;
//       list.appendChild(listItem);
//     }

// 12.DOM Change Attribute Value:
var image = document.getElementById('myPic');
var button = document.getElementById('changeButton');

button.addEventListener('click', function() {
  image.src = "./img/img1.jpg";
});