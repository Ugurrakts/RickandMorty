import axios from "axios";

export const fetchCharacters = async (query: string): Promise<Character[]> => {
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );
    return data.results;
  } catch (error) {
    throw new Error("Error fetching characters");
  }
};
