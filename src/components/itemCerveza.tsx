import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { FilterList, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material";
import CervezaSchema from "../models/CervezaSchema";

export interface IItemCerveza {
    props : {
      cerveza : CervezaSchema,
    }
}

const ItemCerveza = ({props}: IItemCerveza) => {
    
    const { cerveza } = props;

    return (
        <div className="w-full lg:w-1/3 md:w-1/3 py-6 px-4 relative hover:scale-105 hover:transition hover:duration-200">
            <Card className="cardCerveza rounded-none cursor-pointer">
                <div className="w-full flex justify-center">
                    <FilterList style={{fontSize: "3rem", bottom: ".7rem", color: "#d5d4d4"}} className="filterListCerveza relative" />
                </div>
                <CardContent className="flex flex-col items-center" style={{padding: ".5rem", paddingBottom: "3rem"}}>
                    <span className="text-xs text-center">{cerveza.ingredients.yeast}</span>
                    <div className="flex max-h-28 h-28 justify-center items-center">
                        <span className="uppercase text-xl font-bold text-center">{cerveza.name}</span>
                    </div>
                    <img className="max-h-48" alt={`${cerveza.id}`} src={cerveza.image_url}/>
                    <span className="text-lg font-bold mt-4">OG {cerveza.target_og}</span>
                    <span className="text-xs font-light mt-4">{cerveza.ph ? cerveza.ph : "0"} &pi;</span>
                </CardContent>
                <div className="w-full flex items-center justify-center">
                    <IconButton style={{position: "absolute", backgroundColor: "white", borderTop: "1px solid"}}><ShoppingBagOutlined style={{color: "white", fontSize: "3rem"}}/></IconButton>
                </div>
            </Card>
        </div>
    )
}

ItemCerveza.defaultProps = {
}

export default ItemCerveza;