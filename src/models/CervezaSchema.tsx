class CervezaSchema {
    
   id          : number;
   name        : string; 
   ingredients : {
      yeast : string;
   };
   image_url   : string;
    
   constructor(cerveza: CervezaSchema) {
      this.id           = cerveza.id;
      this.name         = cerveza.name;
      this.ingredients  = cerveza.ingredients;
      this.image_url    = cerveza.image_url;
   }
 }
 
 export default CervezaSchema;