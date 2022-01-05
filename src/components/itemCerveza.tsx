import { Button, Card, CardActions, CardContent, Link } from "@mui/material";
import { Twitter, Facebook, Room, Phone, Email, FilterList } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Fragment } from "react";
import CervezaSchema from "../models/CervezaSchema";

export interface IItemCerveza {
    props : {
      cerveza : CervezaSchema,
    }
}

const ItemCerveza = ({props}: IItemCerveza) => {
    
    const { cerveza } = props;

    return (
        <div className="w-1/3 p-2">
            <Card className="hover:scale-105 hover:transition hover:duration-200 rounded-none cursor-pointer">
                <div className="w-full flex justify-center">
                    <FilterList style={{fontSize: "3rem", bottom: ".7rem", color: "#d5d4d4"}} className="relative" />
                </div>
                <CardContent className="flex flex-col items-center" style={{padding: ".5rem"}}>
                    <span className="text-xs text-center">{cerveza.ingredients.yeast}</span>
                    <div className="flex max-h-28 h-28 justify-center items-center">
                        <span className="uppercase text-xl font-bold text-center">{cerveza.name}</span>
                    </div>
                    <img className="max-h-48" alt={`${cerveza.id}`} src={cerveza.image_url}/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}

ItemCerveza.defaultProps = {
}

export default ItemCerveza;