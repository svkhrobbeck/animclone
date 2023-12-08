import axios from "axios";

export const postHomePageAnime = async (category, limit = 20) => {
  const { data } = await axios.post(
    "/season/home",
    { category },
    { params: { limit } }
  );

  return data;
};

export const getData = async (url, params = {}) => {
  const { data } = await axios.get(url, { params });
  return data;
};
