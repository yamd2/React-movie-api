import axios from "axios";

export const fetchData = (str) => {
  const apiEP = `http://www.omdbapi.com/?t=${str}&apikey=1c49254a`;
  try {
    return axios.get(apiEP);
  } catch (error) {
    console.log(error);
  }
};
