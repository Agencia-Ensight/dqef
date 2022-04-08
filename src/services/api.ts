import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://dev9.deixaqueeufaco.io',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiClient = axiosClient;