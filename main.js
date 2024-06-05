import "./style.css";
import platforms from "./platforms";

// Function to handle search and open URL
function openURL(baseUrl, queryParam) {
  const query = document.querySelector(".search").value;
  const url = query ? `${baseUrl}${queryParam}${query}` : baseUrl;
  window.open(url, "_blank");
}

// Function to generate buttons dynamically
function generateButtons() {
  const col1 = document.querySelector(".col1");
  const col2 = document.querySelector(".col2Container");
  const col3 = document.querySelector(".col3");

  function createAccordion(category, platformList, column) {
    const accordionWrapper = document.createElement("div");
    accordionWrapper.classList.add("accordionWrapper");

    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.innerText = category;

    const panel = document.createElement("div");
    panel.classList.add("panel");

    platformList.forEach((platform) => {
      const button = document.createElement("button");
      button.innerText = platform.name;
      button.onclick = () =>
        openURL(platform.url, platform.url.includes("?") ? "" : "?search=");
      panel.appendChild(button);
    });

    accordionWrapper.appendChild(accordion);
    accordionWrapper.appendChild(panel);
    column.appendChild(accordionWrapper);
  }

  for (const category in platforms.col1) {
    createAccordion(category, platforms.col1[category], col1);
  }

  platforms.col2.forEach((platform) => {
    const button = document.createElement("button");
    button.innerText = platform.name;
    button.onclick = () =>
      openURL(platform.url, platform.url.includes("?") ? "" : "?search=");
    col2.appendChild(button);
  });

  for (const category in platforms.col3) {
    createAccordion(category, platforms.col3[category], col3);
  }
}

// Initialize buttons
generateButtons();

// Event listener to focus the search input when slash is pressed and unfocus when escape is pressed
document.addEventListener("keydown", (event) => {
  const searchInput = document.querySelector(".search");
  if (event.key === "/") {
    event.preventDefault(); // Prevent the default action of the slash key
    searchInput.focus();
  } else if (event.key === "Escape") {
    searchInput.blur();
  } else if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    const query = searchInput.value;
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, "_blank");
  }
});
