class FiltroSchema {
    
   per_page: number;
    
   constructor(filtro: FiltroSchema) {
      this.per_page = filtro.per_page;
   }
 }
 
 export default FiltroSchema;