import CervezaSchema from '../models/CervezaSchema';
import axios from 'axios';
import FiltroSchema from '../models/FiltroSchema';

function getCervezas(filtro: FiltroSchema){
  return axios({
      method: 'get',
      url: `https://api.punkapi.com/v2/beers?per_page=${filtro.per_page}`,
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
