import axios from 'axios';
import IFiltro from '../interfaces/IFiltro';

function getCervezas(filtro: IFiltro) {
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

const exportedObject = {
	getCervezas
}

export default exportedObject;
