import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../hooks/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, error, cabins };
}
