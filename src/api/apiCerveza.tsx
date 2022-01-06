import axios from 'axios';
import IFiltro from '../interfaces/IFiltro';

function getCervezas(filtro: IFiltro) {
	// let url = `https://api.punkapi.com/v2/beers?per_page=${filtro.per_page}&abv_gt=${filtro.rangoABV[0]}&abv_lt=${filtro.rangoABV[1]}`; 
	let url = `https://api.punkapi.com/v2/beers?per_page=${filtro.per_page}`; 
	return axios({
		method: 'get',
		url: url,
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
