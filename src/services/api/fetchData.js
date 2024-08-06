import api from "./api";

export const fetchProducts = async () => {
  const { data } = await api("/product");
  return data;
};
export const fetchProductById = async (id) => {
  const { data } = await api(`/product/${id}`);
  return data;
};
export const fetchProductByCategory = async (name) => {
  const { data } = await api(`/product`);
  const filterByCategory = data.filter((item) => item.category === name);
  return filterByCategory;
};
export const fetchProductByQuery = async (query) => {
  const { data } = await api(`/product`);
  const lowerCaseQuery = query.toLowerCase();

  const filterByQuery = data.filter(
    (item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
  );

  return filterByQuery;
};
export const fetchCart = async () => {
  const { data } = await api("/cart");
  return data;
};
