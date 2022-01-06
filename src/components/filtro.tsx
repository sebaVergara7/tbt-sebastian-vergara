import { Card, CardContent, FormControlLabel, FormGroup, Slider, Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Close, ExpandMore } from "@mui/icons-material";
import { connect } from "react-redux";
import { setFiltro, resetFiltro, /* setListaCervezas */ } from "../redux/actions/main";
import BpCheckbox from "./BpCheckbox";
import classes from './componentStyles';
// import apiCerveza from '../api/apiCerveza';
// import IFiltro from "../interfaces/IFiltro";

const SliderStyled = styled(Slider)(({ theme }) => ({
	color: '#ac3051',
	'& .MuiSlider-thumb': {
		height: 12,
		width: 12,
		borderRadius: 0,
		transform: "rotate(45deg) translate(-70%, 0)",
		border: '2px solid currentColor',
	},
	'& .MuiSlider-markLabel': {
		fontSize: ".7rem"
	}
}));

const minDistance = 5;

const Filtro = (props: any) => {

	const {
		setFiltro,
		resetFiltro,
		// setListaCervezas,
		filtro,
		listaLevaduras,
		listaLupulos,
		listaMaltas,
		listaComidas,
	} = props;

	const handleChange = (
		event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}
		let filtroModificado = null;
		if (activeThumb === 0) {
			filtroModificado = { ...filtro, rangoABV: [Math.min(newValue[0], filtro.rangoABV[1] - minDistance), filtro.rangoABV[1]] }; 
		} else {
			filtroModificado = { ...filtro, rangoABV: [filtro.rangoABV[0], Math.max(newValue[1], filtro.rangoABV[0] + minDistance)] };
		}

		setFiltro(filtroModificado);
		// getCervezas(filtroModificado);
	};

	const seleccionarFiltro = (e: any) => {
		let valor = e.target.value;
		let id = e.target.id;

		let lista = filtro[id].slice();
		let encontrado: any = null;

		if (id === "listaLevaduras") {
			valor = listaLevaduras.find((f: any) => f.name === valor);
			encontrado = lista.find((f: any) => f.name === valor.name);
			if (encontrado) lista = lista.filter((f: any) => f.name !== encontrado.name);
			else lista.push(valor);
		} else {
			encontrado = lista.find((f: string) => f === valor);
			if (encontrado) lista = lista.filter((f: string) => f !== encontrado);
			else lista.push(valor);
		}

		setFiltro({ ...filtro, [id]: lista });
	}

	// const getCervezas = (filtroModificado: IFiltro) => {
	// 	apiCerveza.getCervezas(filtroModificado).then((resp) => {
	// 		if (resp?.status === 200) { setListaCervezas(resp.data) };
	// 	})
	// }

	const marks = [
		{
			value: filtro.rangoABV[0],
			label: `${filtro.rangoABV[0]}`
		},
		{
			value: filtro.rangoABV[1],
			label: `${filtro.rangoABV[1]}`
		},
	]

	
	const showBtnFiltro = (filtro && (filtro.per_page > 25 || filtro.listaLevaduras.length > 0 || filtro.listaLupulos.length > 0 || filtro.listaMaltas.length > 0 || filtro.listaComidas.length > 0 || filtro.rangoABV[0] > 0 || filtro.rangoABV[1] < 60));
	const { classesFiltro } = classes;

	return (
		<div className={classesFiltro.cardDiv}>
			<Card sx={{ minWidth: 275 }}>
				<CardContent className="leading-loose" style={{ paddingBottom: 0 }}>
					<span className={classesFiltro.cardContentSpan}>Filtrar</span>
					<div className={classesFiltro.cardContentDiv}>
						<span className={classesFiltro.cardContentDivSpan}>ABV</span>
						<div className={classesFiltro.cardContentDivDiv}>
							<SliderStyled
								getAriaLabel={() => 'ABV Range'}
								value={filtro.rangoABV}
								onChange={handleChange}
								style={{ color: "#ac3051", width: "85%" }}
								marks={marks}
								max={60}
								min={0}
								step={0.5}
							/>
						</div>
					</div>
					<div className={classesFiltro.cardContentAccordionDiv}>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMore />} >
								<span className={classesFiltro.summarySpan}>Levadura</span>
							</AccordionSummary>
							<AccordionDetails className={classesFiltro.cardContentAccordionDetails}>
								<FormGroup>
									{
										listaLevaduras.map((item: any, index: number) => {
											return <FormControlLabel key={index} style={{ margin: 0, width: "fit-content" }} control={<BpCheckbox id="listaLevaduras" checked={filtro.listaLevaduras.find((f: any) => f.name === item.name) ? true : false} value={item.name} onClick={seleccionarFiltro} key={index} />} label={item.name} />
										})
									}
								</FormGroup>
							</AccordionDetails>
						</Accordion>
					</div>
					<div className={classesFiltro.cardContentAccordionDiv}>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMore />} >
								<span className={classesFiltro.summarySpan}>Lúpulo</span>
							</AccordionSummary>
							<AccordionDetails className={classesFiltro.cardContentAccordionDetails}>
								<FormGroup>
									{
										listaLupulos.map((item: any, index: number) => {
											return <FormControlLabel key={index} style={{ margin: 0, width: "fit-content" }} control={<BpCheckbox id="listaLupulos" checked={filtro.listaLupulos.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
										})
									}
								</FormGroup>
							</AccordionDetails>
						</Accordion>
					</div>
					<div className={classesFiltro.cardContentAccordionDiv}>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMore />} >
								<span className={classesFiltro.summarySpan}>Malta</span>
							</AccordionSummary>
							<AccordionDetails className={classesFiltro.cardContentAccordionDetails}>
								<FormGroup>
									{
										listaMaltas.map((item: any, index: number) => {
											return <FormControlLabel key={index} style={{ margin: 0, width: "fit-content" }} control={<BpCheckbox id="listaMaltas" checked={filtro.listaMaltas.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
										})
									}
								</FormGroup>
							</AccordionDetails>
						</Accordion>
					</div>
					<div className="flex flex-col py-4">
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMore />} >
								<span className={classesFiltro.summarySpan}>Comidas</span>
							</AccordionSummary>
							<AccordionDetails className={classesFiltro.cardContentAccordionDetails}>
								<FormGroup>
									{
										listaComidas.map((item: any, index: number) => {
											return <FormControlLabel key={index} style={{ margin: 0, width: "fit-content" }} control={<BpCheckbox id="listaComidas" checked={filtro.listaComidas.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
										})
									}
								</FormGroup>
							</AccordionDetails>
						</Accordion>
					</div>
				</CardContent>
			</Card>
			{
				showBtnFiltro && (
					<Button onClick={() => resetFiltro()} color="inherit" style={{ fontSize: "1rem", width: "fit-content", lineHeight: 2, marginTop: ".5rem", color: "#d5d4d4" }}>
						<Close style={{ fontSize: "1rem" }} /> Reestablecer Filtro
					</Button>
				)
			}
		</div>
	)
}

Filtro.defaultProps = {
}

const mapStateToProps = (state: any) => ({
	filtro: state.main.filtro,
	listaLevaduras: state.main.listaLevaduras,
	listaLupulos: state.main.listaLupulos,
	listaMaltas: state.main.listaMaltas,
	listaComidas: state.main.listaComidas,
})

const mapDispatchToProps = {
	setFiltro		 : setFiltro,
	resetFiltro 	 : resetFiltro,
	// setListaCervezas : setListaCervezas
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);