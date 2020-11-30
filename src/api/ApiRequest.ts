import axios from "axios"

export const getLastest = (base : string) => {
    return axios.get("https://api.exchangeratesapi.io/latest?base="+base)
}