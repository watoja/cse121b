/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "James Abraham Watongola";
const currentYear = "2023";
const profilePicture = "images/za.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img[src='" + profilePicture + "']");

/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>' + fullName + '</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ' + fullName);

/* Step 5 - Array */
const favoriteFoods = ['Matooke', 'Chicken Biryani', 'Luwombo with Chicken', 'Rolex', 'Chicken BBQ'];
foodElement.textContent = favoriteFoods.join(', ');
const singleFavoriteFood = 'Yogurt';
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += '<br>' + favoriteFoods.join(',');
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods.join(',');
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods.join(',');
