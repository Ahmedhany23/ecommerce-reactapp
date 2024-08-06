import { useQuery } from '@tanstack/react-query';
import {  fetchProductById } from './fetchData';
import { QUERY_KEYS } from './queryKeys';

export const useProductById = (id) => {
    return useQuery({ queryKey: [QUERY_KEYS.PRODUCT , id], queryFn: () => fetchProductById(id)});
  };
