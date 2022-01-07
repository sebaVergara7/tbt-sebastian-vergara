import { Tooltip, Button, Divider } from "@mui/material";
import { Twitter, Facebook, ShoppingBagOutlined, Square } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Fragment } from "react";
import classes from "./componentStyles";

//Lista para renderizar menú superior
const listaMenu = [
    "CATÁLOGO ENTERO",
    "VINO",
    "VODKA",
    "CHAMPÁN",
    "COÑAC",
    "WHISKY"
]

const Header = () => {

    //Objeto con las clases del componente Header
    const { classesHeader } = classes;

    return (
        <div className={classesHeader.headerDiv} style={{ backgroundColor: "#f7f6f5", backgroundImage: "url(beer-pattern.png)" }}>
            <div className={classesHeader.headerDivTitle}>
                <div className={classesHeader.headerDivInfo}>
                    <Typography variant="button" className="cursor-pointer">
                        ACERCA DE LA COMPAÑÍA
                    </Typography>
                    <Typography variant="button" className="cursor-pointer">
                        BLOG
                    </Typography>
                    <Tooltip title="@TBT">
                        <Twitter className="cursor-pointer" style={{ color: "#758ab2" }} />
                    </Tooltip>
                    <Tooltip title="TBT">
                        <Facebook className="cursor-pointer" style={{ color: "#758ab2" }} />
                    </Tooltip>
                </div>
                <div className={classesHeader.headerDivImg}>
                    <img alt="beer" className="h-16 mr-2" src="beer.png" />
                    <div className={classesHeader.headerDivImgSpan} style={{ color: "#5d2c3a" }}>
                        <Typography variant="h3">
                            the beer
                        </Typography>
                        <Typography variant="overline" lineHeight={1}>
                            of tomorrow
                        </Typography>
                    </div>
                </div>
                <div className={classesHeader.headerDivButton}>
                    <Button variant="contained" style={{ backgroundColor: "#ac3051" }}>Sé un distribuidor</Button>
                    <Button variant="outlined" className="px-0" style={{ color: "#ac3051", borderColor: "#ac3051" }} ><ShoppingBagOutlined /></Button>
                </div>
            </div>
            <Divider style={{ margin: ".5rem 0 .5rem 0" }} />
            <div className={classesHeader.headerDivButtonList}>
                {
                    listaMenu.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <Button color="inherit">{item}</Button>
                                {
                                    (index < (listaMenu.length - 1)) && (
                                        <Square style={{ fontSize: ".5rem", color: "#ac3051" }} className="rotate-45" />
                                    )
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

Header.defaultProps = {
}

export default Header;