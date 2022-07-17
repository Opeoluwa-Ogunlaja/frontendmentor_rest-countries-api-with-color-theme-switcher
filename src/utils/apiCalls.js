import axios from "axios";

export const fetchCountries = async (url) => {
    try {
        const req = await axios.get(`${url}`);
        const data = await req.data;
        return data ?? [];
    } catch (error) {
        if (axios.isCancel(error)) {
        }
        else{
            console.error(error);
            return [];
        }
    }
}

export const fetchCountry = async (url) => {
    try {
        const req = await axios.get(url);
        const data = await req.data[0];
        return data;
    } catch (error) {
        if (axios.isCancel(error)) {
        }
        else{
            console.error(error);
            return [];
        }
    }
}

export const fetchCioc = async (url) => {
    try {
        const req = await axios.get(`${url}`);
        const data = await req.data;
        return data ?? [];
    } catch (error) {
        if (axios.isCancel(error)) {
        }
        else{
            console.error(error);
            return [];
        }
    }
}