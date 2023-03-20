import type { IPodcast } from "../IPodcast";
import { getPodcasts } from "../../services/api";

const podCastContainer = document.querySelector(".podlist__wrapper") as HTMLElement;

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

function createElement(elementString: string, cssClass: string, description: string): HTMLElement {
  const element = document.createElement(elementString);
  element.setAttribute("class", cssClass);
  const desc = document.createTextNode(description);
  element.appendChild(desc);
  return element;
}

function createElementWithAttribute(elementString: string, cssClass: string): HTMLElement {
  const element = document.createElement(elementString);
  element.setAttribute("class", cssClass);
  return element;
}

export async function createHtml(): Promise<void> {
  const podCasts: IPodcast[] = await getPodcasts();
  if (podCasts.length === 0) {
    const errorText = createElement("div", "podlist__error", "Hoppsan, här blev det lite tokigt!");
    podCastContainer.appendChild(errorText);
  } else {
    podCasts.forEach(podcast => {
      const innerArticle = createElementWithAttribute("article", "podlist__podcast");
      const textDiv = createElementWithAttribute("div", "podlist__div");
      const imgPlacement = createImg(podcast.socialimage, podcast.name);
      const linkPlacement = createLink(podcast.programurl);
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
}

export default createHtml;
