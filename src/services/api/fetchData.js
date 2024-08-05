import api from './api'

export const fetchProducts = async () => {
    const {data}  = await api('/product');
    return data;
}
export const fetchCart = async () => {
    const {data}  = await api('/cart');
    return data;
}