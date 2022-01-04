class CervezaSchema {
    
    _id?    : string;
    userId? : string;
    title?  : string;
    body?   : string;   
    
    constructor(cerveza: CervezaSchema) {
       this._id    = cerveza._id;
       this.userId = cerveza.userId;
       this.title  = cerveza.title;
       this.body   = cerveza.body;
    }
 }
 
 export default CervezaSchema;