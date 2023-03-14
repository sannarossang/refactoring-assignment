import { IPodcast } from "../models/IPodcast";

export async function getPodcasts(): Promise<IPodcast[]> {
  return await fetch(
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
  )
    .then((data) => data.json())
    .then((json) => {
      return json.programs;
    })
    .catch((error) => {
      console.error("nått blev fel:", error);
      return null;
    });
}

export default getPodcasts;
