import { Button, Link } from "@mui/material";
import { Twitter, Facebook, Room, Phone, Email } from "@mui/icons-material";
import { Typography } from "@mui/material";
import classes from './componentStyles';

const Footer = () => {
    
    //Objeto con las clases del componente Footer
    const { classesFooter } = classes;

    return (
        <div className="w-full">
            <div className={classesFooter.footerDiv} style={{ backgroundImage: "url(beer-pattern.png)" }}>
                <div className={classesFooter.footerDivTitle}>
                    <div className={classesFooter.divImg}>
                        <img alt="beer" className="h-16 mr-2" src="beer.png" />
                        <div className={classesFooter.divImgTypography} style={{ color: "#5d2c3a" }}>
                            <Typography variant="h3">
                                the beer
                            </Typography>
                            <Typography variant="overline" lineHeight={1}>
                                of tomorrow
                            </Typography>
                        </div>
                    </div>
                    <div className={classesFooter.divContactGroup}>
                        <div className={classesFooter.divContact}>
                            <Room style={{ color: "#ac3051" }} />
                            <span className={classesFooter.divContactSpan}>Rusia, <b>Bolshaya Serpukhovskaya, 44,</b> </span>
                            <span className={classesFooter.divContactSpan}>Moscú, 15093</span>
                        </div>
                        <div className={classesFooter.divContact}>
                            <Phone style={{ color: "#ac3051" }} />
                            <span className={classesFooter.divContactSpan}>+7 (495) <b>137-77-45</b> </span>
                            <span className={classesFooter.divContactSpan}>10:00 - 20:00</span>
                        </div>
                        <div className={classesFooter.divContact}>
                            <Email style={{ color: "#ac3051" }} />
                            <span className={classesFooter.divContactSpan}>info@thebeeroftomorrow.es</span>
                            <span className={classesFooter.divContactSpan}>order@thebeeroftomorrow.es</span>
                        </div>
                        <div className={classesFooter.divContactButton}>
                            <Button variant="contained" style={{ backgroundColor: "#ac3051" }}>Solicita una llamada</Button>
                            <span style={{ fontSize: ".6rem" }} className="font-light leading-loose">Respondemos hasta en 15 días</span>
                        </div>
                    </div>
                </div>
                <div className={classesFooter.footerDivContentGroup}>
                    <div className={classesFooter.footerDivContent}>
                        <span className={classesFooter.divContentSpan}>Catálogo</span>
                        <div className={classesFooter.divContentLinkGroup}>
                            <Link className={classesFooter.divContentLink} color="inherit">Catálogo completo</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Vino</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Vodka</Link>
                        </div>
                    </div>
                    <div className={`${classesFooter.footerDivContent} justify-end`}>
                        <div className={classesFooter.divContentLinkGroup}>
                            <Link className={classesFooter.divContentLink} color="inherit">Champán</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Coñac</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Whisky</Link>
                        </div>
                    </div>
                    <div className={classesFooter.footerDivContent}>
                        <span className={classesFooter.divContentSpan}>TBT</span>
                        <div className={classesFooter.divContentLinkGroup}>
                            <Link className={classesFooter.divContentLink} color="inherit">Acerca de la compañía</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Blog</Link>
                            <Link className={classesFooter.divContentLink.replace("font-light", "font-bold ")} style={{ color: "#ac3051" }}>Sé un distribuidor</Link>
                        </div>
                    </div>
                    <div className={classesFooter.footerDivContent}>
                        <span className={classesFooter.divContentSpan}>Contacto</span>
                        <div className={classesFooter.divContentLinkGroup}>
                            <div className="flex items-center">
                                <Twitter className="mr-2" style={{ color: "#758ab2" }} />
                                <Link className={classesFooter.divContentLink} color="inherit">Twitter</Link>
                            </div>
                            <div className="flex items-center">
                                <Facebook className="mr-2" style={{ color: "#758ab2" }} />
                                <Link className={classesFooter.divContentLink} color="inherit">Facebook</Link>
                            </div>
                        </div>
                    </div>
                    <div className={classesFooter.footerDivContent}>
                        <span className={classesFooter.divContentSpan}>Información</span>
                        <div className={classesFooter.divContentLinkGroup}>
                            <Link className={classesFooter.divContentLink} color="inherit">Condiciones</Link>
                            <Link className={classesFooter.divContentLink} color="inherit">Procesamiento de datos</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classesFooter.copyrightDiv} style={{ backgroundColor: "#f7f6f5" }}>
                <span className={classesFooter.copyrightSpan} >the beer of tomorrow &#169; 2021</span>
            </div>
        </div>
    )
}

Footer.defaultProps = {
}

export default Footer;