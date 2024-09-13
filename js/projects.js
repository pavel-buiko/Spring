import articles from "./projectsItems.js";

const container = document.querySelector(".main__cards__container");
const searchInput = document.querySelector("#search-input");

let timeoutId = null;

function createArticle(item) {
  const article = document.createElement("article");
  article.className = "main__cards__article";

  const link = document.createElement("a");
  link.className = "main__cards__article__item";
  link.href = "#";

  const imageDiv = document.createElement("div");
  imageDiv.className = "main__cards__article__item__icon";

  const image = document.createElement("img");
  image.className = "main__cards__article__item__image";
  image.src = item.imgSrc;
  image.alt = "project-image";

  imageDiv.appendChild(image);
  link.appendChild(imageDiv);

  const cardDiv = document.createElement("div");
  cardDiv.className = "main__cards__article__item__details";

  const projectHeader = document.createElement("h4");
  projectHeader.className = "main__cards__article__item__details__header";
  projectHeader.textContent = item.title;

  const projectText = document.createElement("p");
  projectText.className = "main__cards__article__item__details__text";
  projectText.textContent = item.description;

  cardDiv.appendChild(projectHeader);
  cardDiv.appendChild(projectText);
  link.appendChild(cardDiv);
  article.appendChild(link);

  return article;
}

function renderArticles(filteredArticles) {
  container.innerHTML = "";

  if (filteredArticles.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No results";
    container.appendChild(noResults);
    return;
  }

  filteredArticles.forEach((item) => {
    const article = createArticle(item);
    container.appendChild(article);
  });
}

renderArticles(articles);

// Thats kind of pain to undertand
function debounce(func, delay) {
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function filterArticles(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
  });

  renderArticles(filteredArticles);
}

searchInput.addEventListener("input", debounce(filterArticles, 300));
