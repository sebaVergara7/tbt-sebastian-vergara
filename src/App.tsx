import Layout from "./components/layout";
import { Loop, Square } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import Filtro from "./components/filtro";
import ItemCerveza from "./components/itemCerveza";
import { connect } from "react-redux";
import CervezaSchema from "./models/CervezaSchema";
import { Button } from "@mui/material";
import { setFiltro, setListaCervezas, setListaCervezasAux } from "./redux/actions/main";
import apiCerveza from "./api/apiCerveza";
import classes from "./pagesStyles";

const maxItems = 80;

const App = (props: any) => {

	const { filtro, listaCervezas, listaLevaduras, setListaCervezas, setListaCervezasAux, setFiltro } = props;

	const [cargando, setCargando] = useState(false);

	useEffect(() => 
		// eslint-disable-next-line
		getCervezas(), []
	);

	let listaFiltrada = listaCervezas.slice();

	//SE FILTRA A NIVEL DE JAVASCRIPT
	if (filtro?.listaLevaduras.length > 0) {
		listaFiltrada = listaFiltrada.filter((f: any) => filtro.listaLevaduras.map((item: any) => { return item.name }).includes(f.ingredients.yeast));
	}

	if (filtro?.listaLupulos.length > 0) {
		listaFiltrada = listaFiltrada.filter((f1: any) => f1.ingredients.hops.find((f2: any) => filtro.listaLupulos.includes(f2.name)));
	}

	if (filtro?.listaMaltas.length > 0) {
		listaFiltrada = listaFiltrada.filter((f1: any) => f1.ingredients.malt.find((f2: any) => filtro.listaMaltas.includes(f2.name)));
	}

	if (filtro?.listaComidas.length > 0) {
		listaFiltrada = listaFiltrada.filter((f1: any) => f1.food_pairing.find((f2: any) => filtro.listaComidas.includes(f2)));
	}

	if (filtro?.rangoABV) {
		listaFiltrada = listaFiltrada.filter((f: any) => f.abv >= (filtro.rangoABV[0]) && f.abv <= (filtro.rangoABV[1]));
	}

	const getCervezas = () => {
		apiCerveza.getCervezas(filtro).then((resp) => {
			if (resp?.status === 200) {
				setListaCervezas(resp.data);
				setListaCervezasAux(resp.data);
			};
		})
	}

	const aumentarItemsPorPagina = () => {
		setCargando(true);
		const per_page = (listaFiltrada.length > 0 && (filtro.per_page + 25) < 80) ? filtro.per_page + 25 : 80;
		apiCerveza.getCervezas({ ...filtro, per_page: per_page }).then((resp) => {
			setFiltro({ ...filtro, per_page });
			setListaCervezas(resp?.data);
			setCargando(false);
		})
	}

	return (
		<Layout>
			<Fragment>
				<div className={classes.titleDiv}>
					<div className={classes.titleDivDiv}>
						<span className="underline">Casa</span>
						<Square style={{ fontSize: ".5rem", color: "#d5d4d4" }} className={classes.titleDivDivSquare} />
						<span style={{ color: "#d5d4d4" }}>Catálogo principal</span>
					</div>
					<span className={classes.titleSpan}>Catálogo principal</span>
				</div>
				<div className={classes.bodyDiv}>
					<div className={classes.filterDiv}>
						<Filtro />
					</div>
					<div className={classes.bodyDivDiv}>
						<div style={{ maxHeight: "45vh" }} className={`${listaFiltrada?.length === 0 ? "items-center h-full" : ""} ${classes.listDiv}`}>
							{
								listaFiltrada?.length > 0
									? listaFiltrada.map((cerveza: CervezaSchema, index: number) => <ItemCerveza key={index} props={{ cerveza: cerveza, listaLevaduras: listaLevaduras }} />)
									: (<span style={{ color: "#d5d4d4" }} className={classes.noRegSpan}>No existen registros</span>)
							}
						</div>
						{
							listaCervezas?.length !== maxItems && (
								<div className={classes.buttonDiv}>
									<div className={classes.buttonDivDiv}>
										<Button className="cardButton" onClick={aumentarItemsPorPagina} variant="outlined" style={{ color: "#ac3051", borderColor: "#ac3051", padding: ".5rem 4rem" }}>
											{
												cargando
													? (<Loop className="animate-spin" />)
													: "Mostrar más"
											}
										</Button>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</Fragment>
		</Layout>
	);
}

const mapStateToProps = (state: any) => ({
	filtro: state.main.filtro,
	listaCervezas: state.main.listaCervezas,
	listaLevaduras: state.main.listaLevaduras,
})

const mapDispatchToProps = {
	setFiltro: setFiltro,
	setListaCervezas: setListaCervezas,
	setListaCervezasAux: setListaCervezasAux
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
