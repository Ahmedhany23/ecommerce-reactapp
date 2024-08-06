import { useQuery } from '@tanstack/react-query';
import {  fetchProductByQuery } from './fetchData';
import { QUERY_KEYS } from './queryKeys';

export const useProductByQuery = (query) => {
    return useQuery({ queryKey: [QUERY_KEYS.PRODUCTBYQUERY , query], queryFn: () => fetchProductByQuery(query)});
  };
