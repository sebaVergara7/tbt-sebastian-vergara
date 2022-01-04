import { Tooltip, Button, Divider } from "@mui/material";
import { Twitter, Facebook, ShoppingBagOutlined, Square } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Header = () => {
    return (
        <div className="w-full px-36 py-2 border-b-2 border-b-gray-200" style={{backgroundColor: "#f7f6f5", backgroundImage: "url(beer-pattern.png)"}}>
            <div className="flex w-full">
                <div className="w-1/3 flex items-center justify-evenly">
                    <Typography variant="button" className="cursor-pointer">
                        ACERCA DE LA COMPAÑÍA
                    </Typography>
                    <Typography variant="button" className="cursor-pointer">
                        BLOG
                    </Typography>
                    <Tooltip title="@TBT">
                        <Twitter className="cursor-pointer" style={{color: "#758ab2"}}/>
                    </Tooltip> 
                    <Tooltip title="TBT">
                        <Facebook className="cursor-pointer" style={{color: "#758ab2"}}/>
                    </Tooltip> 
                </div>
                <div className="w-1/3 flex items-center justify-center">
                    <img alt="beer" className="h-16 mr-2" src="beer.png"/>
                    <div className="flex flex-col items-center" style={{color: "#5d2c3a"}}>
                        <Typography variant="h3">
                            the beer
                        </Typography>
                        <Typography variant="overline" lineHeight={1}>
                            of tomorrow
                        </Typography>
                    </div>
                </div>
                <div className="w-1/3 flex items-center justify-evenly">
                    <Button variant="contained" style={{backgroundColor: "#ac3051"}}>Sé un distribuidor</Button>
                    <Button variant="outlined" className="px-0" style={{color: "#ac3051", borderColor: "#ac3051"}} ><ShoppingBagOutlined/></Button>
                </div>
            </div>
            <Divider style={{margin: ".5rem 0 .5rem 0"}}/>
            <div className="flex items-center justify-between py-6">
                <Button color="inherit">CATÁLOGO ENTERO</Button>  
                <Square style={{fontSize: ".5rem", color: "#ac3051"}} className="rotate-45"/>
                <Button color="inherit">VINO</Button>  
                <Square style={{fontSize: ".5rem", color: "#ac3051"}} className="rotate-45"/>
                <Button color="inherit">VODKA</Button>  
                <Square style={{fontSize: ".5rem", color: "#ac3051"}} className="rotate-45"/>
                <Button color="inherit">CHAMPÁN</Button>  
                <Square style={{fontSize: ".5rem", color: "#ac3051"}} className="rotate-45"/>
                <Button color="inherit">COÑAC</Button>  
                <Square style={{fontSize: ".5rem", color: "#ac3051"}} className="rotate-45"/>
                <Button color="inherit">WHISKY</Button>  
            </div>
        </div>
    )
}

Header.defaultProps = {
}

export default Header;