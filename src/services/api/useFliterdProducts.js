import { useQuery } from '@tanstack/react-query';
import {  fetchFilterdProducts } from './fetchData';
import { QUERY_KEYS } from './queryKeys';

export const useFilterdProducts = (filter) => {
    return useQuery({ queryKey: [QUERY_KEYS.PRODUCT , filter], queryFn: () => fetchFilterdProducts(filter)});
  };
