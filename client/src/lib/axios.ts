import axios from 'axios';
import { NO_DOCKER_API_PORT, NO_DOCKER_APP_PORT } from 'src/env';

const getClient = () => axios.create({
  baseURL: getUrl(),
  headers: {
    'Accept-version': '1.4',
  },
});

const getUrl = () => {
  return `http://localhost:${NO_DOCKER_API_PORT || NO_DOCKER_APP_PORT}/api`;
}

export { getClient, axios };
