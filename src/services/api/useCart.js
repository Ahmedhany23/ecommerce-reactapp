import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "./fetchData";
import { QUERY_KEYS } from "./queryKeys";
export const useCart = () => {
  return useQuery({ queryKey: [QUERY_KEYS.CART], queryFn: fetchCart });
};
