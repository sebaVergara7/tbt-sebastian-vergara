import { Button, Link } from "@mui/material";
import { Twitter, Facebook, Room, Phone, Email } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <div className="w-full">
                <div className="w-full px-2 lg:px-36 md:px-36 py-2 border-t-2 border-t-gray-200" style={{backgroundImage: "url(beer-pattern.png)"}}>
                    <div className="flex flex-col lg:flex-row md:flex-row w-full">
                        <div className="w-full lg:w-1/4 md:w-1/4 flex items-center justify-center">
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
                        <div className="w-full lg:w-3/4 md:w-3/4 flex flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                            <div className="my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col">
                                <Room style={{color: "#ac3051"}} />
                                <span className="text-xs font-light">Rusia, <b>Bolshaya Serpukhovskaya, 44,</b> </span>
                                <span className="text-xs font-light">Moscú, 15093</span>
                            </div>
                            <div className="my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col">
                                <Phone style={{color: "#ac3051"}} />
                                <span className="text-xs font-light">+7 (495) <b>137-77-45</b> </span>
                                <span className="text-xs font-light">10:00 - 20:00</span>
                            </div>
                            <div className="my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col">
                                <Email style={{color: "#ac3051"}} />
                                <span className="text-xs font-light">info@thebeeroftomorrow.es</span>
                                <span className="text-xs font-light">order@thebeeroftomorrow.es</span>
                            </div>
                            <div className="my-2 lg:my-0 md:my-0 w-full lg:w-1/4 md:w-1/4 flex flex-col items-center justify-center">
                                <Button variant="contained" style={{backgroundColor: "#ac3051"}}>Solicita una llamada</Button>
                                <span style={{fontSize: ".6rem"}} className="font-light leading-loose">Respondemos hasta en 15 días</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap w-full mt-10">
                        <div className="w-1/2 lg:w-1/5 md:w-1/5 flex flex-col">
                            <span className="font-medium text-lg lg:text-2xl md:text-2xl uppercase">Catálogo</span>
                            <div className="w-full flex flex-col mt-0 lg:mt-4 md:mt-4">
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Catálogo completo</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Vino</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Vodka</Link>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/5 md:w-1/5 flex flex-col justify-end">
                            <div className="w-full flex flex-col mt-0 lg:mt-4 md:mt-4">
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Champán</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Coñac</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Whisky</Link>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/5 md:w-1/5 flex flex-col">
                            <span className="font-medium text-lg lg:text-2xl md:text-2xl uppercase">TBT</span>
                            <div className="w-full flex flex-col mt-0 lg:mt-4 md:mt-4">
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Acerca de la compañía</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Blog</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-bold leading-10" style={{color: "#ac3051"}}>Sé un distribuidor</Link>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/5 md:w-1/5 flex flex-col">
                            <span className="font-medium text-lg lg:text-2xl md:text-2xl uppercase">Contacto</span>
                            <div className="w-full flex flex-col mt-0 lg:mt-4 md:mt-4">
                                <div className="flex items-center">
                                    <Twitter className="mr-2" style={{color: "#758ab2"}}/>
                                    <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Twitter</Link>
                                </div>
                                <div className="flex items-center">
                                    <Facebook className="mr-2" style={{color: "#758ab2"}}/>
                                    <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Facebook</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/5 md:w-1/5 flex flex-col">
                            <span className="font-medium text-lg lg:text-2xl md:text-2xl uppercase">Información</span>
                            <div className="w-full flex flex-col mt-0 lg:mt-4 md:mt-4">
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Condiciones</Link>
                                <Link className="cursor-pointer text-sm ls:text-lg md:text-lg font-light leading-10" color="inherit">Procesamiento de datos</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center" style={{backgroundColor: "#f7f6f5"}}>
                    <span className="font-light text-xs leading-10" >the beer of tomorrow &#169; 2021</span>
                </div>
            </div>
        </Fragment>
    )
}

Footer.defaultProps = {
}

export default Footer;