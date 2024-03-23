import axios from "axios";

const advertsInstance = axios.create({
   baseURL: "https://65fa83dd3909a9a65b1a8f06.mockapi.io/api",
});

export const fetchAdverts = async () => {
   const { data } = await advertsInstance.get("/adverts");
   return data;
};
