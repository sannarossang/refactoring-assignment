import axios from "axios";
import type { IPodcast } from "../models/IPodcast";
import type { PodcastResponse } from "../models/PodcastResponse";

export async function getPodcasts(): Promise<IPodcast[]> {
  const response = await axios.get<PodcastResponse>(
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false"
  );
  return response.data.programs;
}
