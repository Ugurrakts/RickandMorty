import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "./character.service";

export const useRickAndMortyAPI = (query: string) => {
  return useQuery({
    queryKey: ["characters", query],
    queryFn: () => fetchCharacters(query),
    enabled: !!query,
  });
};
