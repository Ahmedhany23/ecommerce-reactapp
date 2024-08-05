import { useQuery } from '@tanstack/react-query';
import {  fetchProducts } from './fetchData';
import { QUERY_KEYS } from './queryKeys';

export const useProducts = () => {
    return useQuery({ queryKey: [QUERY_KEYS.PRODUCTS], queryFn: fetchProducts});
  };
