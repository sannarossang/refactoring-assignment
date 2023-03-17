import type { IPodcast } from "../IPodcast";
import { getPodcasts } from "../../services/api";

// eslint-disable-next-line
const podCastContainer = document.querySelector(".podlist__wrapper") as HTMLElement;

export async function createHtml(): Promise<void> {
  const podCasts: IPodcast[] = await getPodcasts();
  // eslint-disable-next-line
  podCasts.forEach(podcast => {
    const innerArticle = createInnerArticle();
    const textDiv = createTextDiv();
    const imgPlacement = createImg(podcast.socialimage, podcast.name);
    const linkPlacement = createLink(podcast.programurl);
    // eslint-disable-next-line
    const descPlacement = createElement("p", "podlist__description", podcast.description);
    const headerPlacement = createElement("h2", "podlist__title", podcast.name);

    podCastContainer.appendChild(innerArticle);
    innerArticle.appendChild(imgPlacement);
    innerArticle.appendChild(textDiv);
    textDiv.appendChild(headerPlacement);
    textDiv.appendChild(descPlacement);
    textDiv.appendChild(linkPlacement);
  });
}

function createInnerArticle(): HTMLElement {
  const innerArticle = document.createElement("article");
  innerArticle.setAttribute("class", "podlist__podcast");
  return innerArticle;
}

function createTextDiv(): HTMLDivElement {
  const textDiv = document.createElement("div");
  textDiv.setAttribute("class", "podlist__div");
  return textDiv;
}

function createLink(url: string): HTMLAnchorElement {
  const linkPlacement = document.createElement("a");
  linkPlacement.setAttribute("class", "podlist__link");
  const linkText = document.createTextNode("Lyssna här");
  linkPlacement.setAttribute("href", url);
  linkPlacement.appendChild(linkText);
  return linkPlacement;
}

function createImg(img: string, name: string): HTMLElement {
  const imgPlacement = document.createElement("IMG");
  imgPlacement.setAttribute("class", "podlist__image");
  imgPlacement.setAttribute("src", img);
  imgPlacement.setAttribute("width", "100");
  imgPlacement.setAttribute("height", "100");
  imgPlacement.setAttribute(
    "alt",
    `Omslagsbild på podcasten"
    ${name}`
  );
  return imgPlacement;
}

// eslint-disable-next-line
function createElement(element: string, cssClass: string, description: string): HTMLElement {
  const descPlacement = document.createElement(element);
  descPlacement.setAttribute("class", cssClass);
  const desc = document.createTextNode(description);
  descPlacement.appendChild(desc);
  return descPlacement;
}

export default createHtml;
