import CervezaSchema from "../models/CervezaSchema";
import ILevadura from "./ILevadura";

export default interface IItemCerveza {
    props: {
        cerveza: CervezaSchema,
        listaLevaduras: ILevadura[]
    }
}