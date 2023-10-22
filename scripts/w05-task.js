const templesElement = document.getElementById('temples');
let templeList = [];

const displayTemples = (temples) => {
  templesElement.innerHTML = ''; // Clear the existing temple cards
  temples.forEach((temple) => {
    const article = document.createElement('article');
    
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    
    article.appendChild(h3);
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      templeList = await response.json();
      displayTemples(templeList);
    } else {
      console.error("Failed to fetch temple data");
    }
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

const reset = () => {
  templesElement.innerHTML = ''; // Clear the displayed list of temples
};

const sortBy = (temples) => {
  reset(); // Clear the existing temple cards
  const filter = document.getElementById('sortBy').value;
  
  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

document.getElementById('sortBy').addEventListener('change', () => {
  sortBy(templeList);
});

// Call getTemples to load and display temple data
getTemples();
