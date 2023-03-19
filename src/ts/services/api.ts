import axios from "axios";
import type { IPodcast } from "../models/IPodcast";
import type { PodcastResponse } from "../models/PodcastResponse";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const srUrl: string = import.meta.env.VITE_APP_ENDPOINT;

export async function getPodcasts(): Promise<IPodcast[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const response = await axios.get<PodcastResponse>(srUrl);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return response.data.programs;
  } catch (error) {
    console.log("Error when getting data from api...", error);
    return [];
  }
}
