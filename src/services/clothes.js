import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products";

const getWomenClothes = async () => {
  const response = await axios.get(`${baseUrl}/category/women's%20clothing`);
  return response.data;
};

const serviceClothes = {
  getWomenClothes,
};

export default serviceClothes;
