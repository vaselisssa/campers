import axios from "axios";

const advertsInstance = axios.create({
   baseURL: "https://65fa83dd3909a9a65b1a8f06.mockapi.io/api",
});

export const fetchAdverts = async ({ page = 1, limit = 4 }) => {
   try {
      const { data } = await advertsInstance.get("/adverts", {
         params: {
            page: page,
            limit: limit,
         },
      });
      return data;
   } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
   }
};

export const fetchTotal = async (params) => {
   try {
      const response = await advertsInstance.get("/adverts", {
         params: params,
      });
      return response.data;
   } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
   }
};
