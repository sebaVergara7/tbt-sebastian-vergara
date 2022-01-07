import { Card, CardContent, IconButton } from "@mui/material";
import { FilterList, ShoppingBagOutlined } from "@mui/icons-material";
import classes from "./componentStyles";
import IItemCerveza from "../interfaces/IItemCerveza";
import ILevadura from "../interfaces/ILevadura";

const ItemCerveza = ({ props }: IItemCerveza) => {

    //Obtener props
    const { cerveza, listaLevaduras } = props;

    //Objeto con las clases del componente ItemCerveza
    const {classesItemCerveza} = classes;

    return (
        <div className={classesItemCerveza.itemCervezaDiv}>
            <Card className={classesItemCerveza.itemCervezaCard}>
                <div className={classesItemCerveza.itemCervezaTitle}>
                    <FilterList style={{ fontSize: "3rem", bottom: ".7rem", color: "#d5d4d4" }} className={classesItemCerveza.itemCervezaIcon} />
                </div>
                <CardContent className={classesItemCerveza.itemCervezaCardContent} style={{ padding: ".5rem", paddingBottom: "3rem" }}>
                    <span className={classesItemCerveza.yeastSpan} style={{ color: listaLevaduras.find((f: ILevadura) => f.name === cerveza.ingredients.yeast)?.color }}>{cerveza.ingredients.yeast}</span>
                    <div className={classesItemCerveza.nameDiv}>
                        <span className={classesItemCerveza.nameSpan}>{cerveza.name}</span>
                    </div>
                    <img className="max-h-48" alt={`${cerveza.id}`} src={cerveza.image_url} />
                    <span className={classesItemCerveza.abvSpan}>ABV {cerveza.abv}</span>
                    <span className={classesItemCerveza.phSpan}>{cerveza.ph ? cerveza.ph : "0"} &pi;</span>
                </CardContent>
                <div className={classesItemCerveza.iconButtonDiv}>
                    <IconButton style={{ position: "absolute", backgroundColor: "white", borderTop: "1px solid" }}><ShoppingBagOutlined style={{ color: "white", fontSize: "3rem" }} /></IconButton>
                </div>
            </Card>
        </div>
    )
}

export default ItemCerveza;
