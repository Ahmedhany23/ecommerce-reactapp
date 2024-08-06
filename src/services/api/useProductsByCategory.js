import { useQuery } from '@tanstack/react-query';
import {  fetchProductByCategory } from './fetchData';
import { QUERY_KEYS } from './queryKeys';

export const useProductByCategory = (name) => {
    return useQuery({ queryKey: [QUERY_KEYS.PRODUCTBYCATEGORY , name], queryFn: () => fetchProductByCategory(name)});
  };
