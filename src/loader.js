import axios from 'axios';
import { core } from './utils.js';

export default (url) => {
  axios
    .get(url)
    .then((response) => {
      core(url, response.data);
    })
    .catch((error) => {
      console.log('Write error', error);
    });
};
