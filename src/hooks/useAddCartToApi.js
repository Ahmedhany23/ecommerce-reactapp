import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const postCart = async (cartData) => {
  const response = await axios.post(
    'https://66ae5170b18f3614e3b760fa.mockapi.io/cart',
    cartData
  );
  return response.data;
};

export const useAddCartToApi = () => {
  const mutation = useMutation({
    mutationFn: postCart,
    onSuccess: (data) => {
      console.log('Cart added successfully:', data);
    },
    onError: (error) => {
      console.error('Error adding cart:', error);
    },
  });

  return { addCart: mutation.mutate };
};
