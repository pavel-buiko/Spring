import articles from "./projectsItems.js"

const container = document.querySelector(".main__cards__container")

articles.forEach(item =>{
    const article = document.createElement("article");
    article.className = "main__cards__article";

    const link = document.createElement("a");
    link.classNmae= "main__cards__article__item";
    link.href = "#";

    const imageDiv = document.createElement("div");
    imageDiv.className = "main__cards__article__item__icon";

    const image = document.createElement("img");
    image.className = "main__cards__article__item__image";
    image.src = item.imgSrc;
    image.alt = "project-image";

    imageDiv.appendChild(image)
    link.appendChild(imageDiv)
    link.className = "main__cards__article__item"
    const cardDiv = document.createElement("div")
    cardDiv.className= "main__cards__article__item__details";

    const projectHeader = document.createElement("h4");
    projectHeader.className = "main__cards__article__item__details__header"
    projectHeader.textContent = item.title;

    cardDiv.append(projectHeader);

    const projectText = document.createElement("p")
    projectText.className = "main__cards__article__item__details__text";
    projectText.textContent = item.description;

    link.append(cardDiv)

    cardDiv.append(projectText)
    article.appendChild(link)

    container.appendChild(article)
})




