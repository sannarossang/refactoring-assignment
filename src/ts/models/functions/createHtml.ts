import type { IPodcast } from "../IPodcast";
import { getPodcasts } from "../../services/api";
import { link } from "fs";

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
    const descPlacement = createP(podcast.description);
    const headerPlacement = createHeader(podcast.name);

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
  innerArticle.setAttribute("tabindex", "1");
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
  linkPlacement.setAttribute("tabindex", "1");
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

function createP(description: string): HTMLParagraphElement {
  const descPlacement = document.createElement("p");
  descPlacement.setAttribute("class", "podlist__description");
  const desc = document.createTextNode(description);
  descPlacement.appendChild(desc);
  return descPlacement;
}

function createHeader(podname: string): HTMLHeadElement {
  const headerPlacement = document.createElement("h2");
  headerPlacement.setAttribute("class", "podlist__title");
  const programName = document.createTextNode(podname);
  headerPlacement.appendChild(programName);
  return headerPlacement;
}

export default createHtml;
