class CervezaSchema {
    
   id          : number;
   name        : string; 
   ingredients : {
      yeast : string;
   };
   image_url   : string;
   ph          : number;
   target_og   : number;
    
   constructor(cerveza: CervezaSchema) {
      this.id           = cerveza.id;
      this.name         = cerveza.name;
      this.ingredients  = cerveza.ingredients;
      this.image_url    = cerveza.image_url;
      this.ph           = cerveza.ph;
      this.target_og    = cerveza.target_og;
   }
 }
 
 export default CervezaSchema;