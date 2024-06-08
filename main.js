import "./style.css";
import platforms from "./platforms";

// Function to handle search and open URL
function openURL(baseUrl, queryParam) {
  const query = document.querySelector(".search").value;
  const url = query ? `${baseUrl}${queryParam}${query}` : baseUrl;
  // const openInNewTab = document.getElementById("new-tab-toggle").checked;

  window.open(url, "_blank");
  // if (openInNewTab) {
  //   window.open(url, "_blank");
  // } else {
  //   window.location.href = url;
  // }
}

function getFaviconUrl(url) {
  const domain = new URL(url).hostname;
  // Fallback for specific cases
  const fallbackFavicons = {
    "mail.google.com": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    "www.evernote.com": "https://www.evernote.com/favicon.ico",
    "maps.google.com": "https://maps.google.com/favicon.ico",
  };

  if (fallbackFavicons[domain]) {
    return fallbackFavicons[domain];
  }

  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
}

// Function to generate buttons dynamically
function generateButtons() {
  const col1 = document.querySelector(".col1");
  const col2 = document.querySelector(".col2Container");
  const col3 = document.querySelector(".col3");

  function createAccordion(category, platformList, column) {
    const accordionWrapper = document.createElement("div");
    const sanitizedCategory = category.replace(/[^a-zA-Z0-9-_]/g, ""); // Remove characters not acceptable in CSS class syntax
    accordionWrapper.classList.add("accordionWrapper", sanitizedCategory);

    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.innerText = category;

    const panel = document.createElement("div");
    panel.classList.add("panel");

    platformList.forEach((platform) => {
      const buttonWrapper = document.createElement("div");
      buttonWrapper.classList.add("buttonWrapper");

      const button = document.createElement("button");

      const favicon = document.createElement("img");
      favicon.src = getFaviconUrl(platform.url);
      favicon.alt = `${platform.name} icon`;
      favicon.classList.add("favicon");

      button.appendChild(favicon);
      button.appendChild(document.createTextNode(platform.name));
      button.onclick = () =>
        openURL(platform.url, platform.url.includes("?") ? "" : "?search=");

      buttonWrapper.appendChild(button);
      panel.appendChild(buttonWrapper);
    });

    accordionWrapper.appendChild(accordion);
    accordionWrapper.appendChild(panel);
    column.appendChild(accordionWrapper);
  }

  for (const category in platforms.col1) {
    createAccordion(category, platforms.col1[category], col1);
  }

  platforms.col2.forEach((platform) => {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    const button = document.createElement("button");

    const favicon = document.createElement("img");
    favicon.src = getFaviconUrl(platform.url);
    favicon.alt = `${platform.name} icon`;
    favicon.classList.add("favicon");

    button.appendChild(favicon);
    button.appendChild(document.createTextNode(platform.name));
    button.onclick = () =>
      openURL(platform.url, platform.url.includes("?") ? "" : "?search=");

    buttonWrapper.appendChild(button);
    col2.appendChild(buttonWrapper);
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
  }
});

// Event listener for search input box to handle Enter key
document.querySelector(".search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    const query = event.target.value;
    // const url = `https://www.google.com/search?q=${query}`;
    // window.open(url, "_blank");
    openURL(`https://www.google.com/search?q=`, query);
  }
});
