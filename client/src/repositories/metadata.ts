import { getClient } from 'lib/axios';

export const getMetadata = async (path) => {
  const { data } = await (await getClient()).get('/metadata', {
    params: { path },
  });

  // strangely; when the path isn't valid, data is an empty string
  return data || undefined;
};

export default getMetadata;
