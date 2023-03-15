import { IPodcast } from "../IPodcast";
import { getPodcasts } from "../../services/api";

const podCastContainer = document.querySelector(
  ".podlist__wrapper"
) as HTMLElement;

export async function createHtml() {
  const podCasts: IPodcast[] = await getPodcasts();
  podCasts.forEach((podcast) => {
    const innerArticle = createInnerArticle();
    createImg();
    const textDiv = createTextDiv();

    function createInnerArticle() {
      const innerArticle = document.createElement("article");
      innerArticle.setAttribute("class", "podlist__podcast");
      innerArticle.setAttribute("tabindex", "1");
      podCastContainer.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement("div");
      textDiv.setAttribute("class", "podlist__div");
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement("a");
      linkPlacement.setAttribute("class", "podlist__link");
      const linkText = document.createTextNode("Lyssna här");
      linkPlacement.setAttribute("href", podcast.programurl);
      linkPlacement.setAttribute("tabindex", "1");
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }

    function createImg() {
      const imgPlacement = document.createElement("IMG");
      imgPlacement.setAttribute("class", "podlist__image");
      imgPlacement.setAttribute("src", podcast.socialimage);
      imgPlacement.setAttribute("width", "100");
      imgPlacement.setAttribute("height", "100");
      imgPlacement.setAttribute(
        "alt",
        `Omslagsbild på podcasten"
        ${podcast.name}`
      );
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement("p");
      descPlacement.setAttribute("class", "podlist__description");
      const desc = document.createTextNode(podcast.description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement("h2");
      headerPlacement.setAttribute("class", "podlist__title");
      const programName = document.createTextNode(podcast.name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }

    createHeader();
    createP();
    createLink();
  });
}

export default createHtml;
