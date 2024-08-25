import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Unknown error fetching from ${url}`);
    }
  }
}

export default fetchData;
