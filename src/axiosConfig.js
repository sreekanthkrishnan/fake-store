import axios from "axios";

// #### LIVE SERVER CONFIGS #### //
export const apiConfig = axios.create({
    baseURL: "https://fakestoreapi.com/",
});
