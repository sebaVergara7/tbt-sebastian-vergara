import CervezaSchema from '../models/CervezaSchema';
import axios from 'axios';

function getCervezas(){
  return axios({
      method: 'get',
      url: 'https://api.punkapi.com/v2/beers',
      responseType: 'json',
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
  });
}

export default {getCervezas};
