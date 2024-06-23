import "./style.css";
import platforms from "./platforms";

// Function to handle search and open URL
function openURL(baseUrl, queryParam = "", query = "") {
  let url;

  if (query && queryParam) {
    url = `${baseUrl}${queryParam}${query}`;
  } else {
    url = baseUrl;
  }

  window.open(url, "_blank");

  // const openInNewTab = document.getElementById("new-tab-toggle").checked;
  // if (openInNewTab) {
  //   window.open(url, "_blank");
  // } else {
  //   window.location.href = url;
  // }
}

function getFaviconUrl(url) {
  const domain = url;
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

  // Fallback for specific cases
  const fallbackFavIcons = {
    "https://mail.google.com/mail/u/0/#search":
      "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    "https://www.evernote.com/client/web":
      "https://www.evernote.com/favicon.ico",
    "https://www.google.com/maps/":
      "https://www.svgrepo.com/show/375444/google-maps-platform.svg",
    "https://www.google.com/finance/":
      "https://cdn-1.webcatalog.io/catalog/google-finance/google-finance-icon-filled-256.webp?v=1714773071984",
  };

  if (fallbackFavIcons[domain]) {
    return fallbackFavIcons[domain];
  } else {
    return faviconUrl;
  }
}

function generateButtons() {
  const col1 = document.querySelector(".col1");
  const col2 = document.querySelector(".col2Container");
  const col3 = document.querySelector(".col3");

  function createButton(platform) {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    const button = document.createElement("button");

    const favicon = document.createElement("img");
    favicon.src = getFaviconUrl(platform.url);
    favicon.alt = `${platform.name} icon`;
    favicon.classList.add("favicon");

    button.appendChild(favicon);
    button.appendChild(document.createTextNode(platform.name));

    button.onclick = () => {
      const query = document.querySelector(".search").value;
      openURL(platform.url, platform.queryParam, query);
    };

    buttonWrapper.appendChild(button);
    return buttonWrapper;
  }

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
      const buttonWrapper = createButton(platform);
      panel.appendChild(buttonWrapper);
    });

    accordionWrapper.appendChild(accordion);
    accordionWrapper.appendChild(panel);
    column.appendChild(accordionWrapper);
  }

  for (const category in platforms.col1) {
    createAccordion(category, platforms.col1[category], col1);
  }

  if (platforms.col2) {
    platforms.col2.forEach((platform) => {
      const buttonWrapper = createButton(platform);
      col2.appendChild(buttonWrapper);
    });
  }

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
    openURL(`https://www.google.com/search?q=`, query);
  }
});
