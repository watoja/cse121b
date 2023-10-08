/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile= {};


/* Populate Profile Object with placesLive objects */
myProfile.name= "Abraham James Watongola";
myProfile.photo="images/za.jpg";
myProfile.favoriteFoods=[
    "Chicken Biryani",
    "Chicken Luwombo",

];
myProfile.hobbies =["Coding", "Chess","Nature walks"];
myProfile.placesLived=[];
myProfile.placesLived.push(
    {
        place: "Rushere, Kiruhura",
        length:"7 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Katwe,Masaka ",
        length:"18 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Kicukiro,Rwanda",
        length:"6 months"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt =myProfile.name;
/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.innerHTML = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby=>{
    let li = document.createElement("li");
    li.innerHTML = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
// ...

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let li = document.createElement('li'); // Create a <li> element
  
    // Wrap the place name in <strong> tag for boldness using correct template literals
    li.innerHTML = `<strong>${place.place}</strong>`;
  
    let dd = document.createElement('dd');
    dd.innerHTML = place.length;
  
    document.querySelector('#places-lived').appendChild(li);
    document.querySelector('#places-lived').appendChild(dd);
  });
  
  // ...
  
