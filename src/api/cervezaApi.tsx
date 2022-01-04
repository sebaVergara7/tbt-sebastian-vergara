import CervezaSchema from '../models/CervezaSchema';
import axios from 'axios';

function getCervezas(){
  axios({
    method: 'get',
    url: 'https://api.punkapi.com/v2/beers',
    responseType: 'json',
    headers: {
      "x-ratelimit-limit": "3600",
      "x-ratelimit-remaining": "3587"
    }
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
} 

export async function handler(req: any, res: any) {

  const {method} = req;

  switch (method) {
    case 'POST':
      // throw new Error("");
      try {        
        return res.status(200).json({success: true});

      } catch (error){return res.status(400).json({success: false, error})}
    
    case 'GET':
      // throw new Error("");
      try {
        const { id } = req.query;
        const res_cervezas: CervezaSchema[] = [];
        getCervezas();        
        // const cervezas = res_cervezas.map(item => {
        //   const cerveza = null
        //   cerveza._id = `${cerveza._id}`;
        //   return cerveza;
        // })

        return res.status(200).json({success: true, data : res_cervezas})

      } catch (error) {return res.status(400).json({success: false, error})}
    
    default:
      return res.status(500).json({success: false, error: "Fallo del servidor"});
  }
}

export default {getCervezas};
