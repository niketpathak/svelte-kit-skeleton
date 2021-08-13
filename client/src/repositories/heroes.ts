import { getClient } from 'lib/axios';


export const getHeroes = async (axiosOptions = {}) => {
  const { data } = await (await getClient()).get('/dc/heroes', axiosOptions);

  return data;
};

export const getPower = async (axiosOptions = {}) => {
  const { data } = await (await getClient()).get('/dc/power', axiosOptions);

  return data;
};

