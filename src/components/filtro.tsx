import { Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, Slider, Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import { Close, ExpandMore } from "@mui/icons-material";
import { connect } from "react-redux";
import { setFiltro, resetFiltro } from "../redux/actions/main";
import FiltroSchema from "../models/FiltroSchema";


const SliderStyled = styled(Slider)(({ theme }) => ({
    color: '#ac3051',
    '& .MuiSlider-thumb': {
      height: 12,
      width: 12,
      borderRadius: 0,
      transform: "rotate(45deg) translate(-70%, 0)",
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-markLabel': {
        fontSize: ".7rem"
    }
}));

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 0,
    transform: "rotate(45deg)",
    width: 12,
    height: 12,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#ac3051',
    '&:before': {
      display: 'block',
      width: 12,
      height: 12,
      content: '""',
    },
});

const BpCheckbox = (props: CheckboxProps) => {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
}

const minDistance = 10;

const Filtro = (props: any) => {

    const { 
        setFiltro, 
        resetFiltro, 
        filtro, 
        listaLevaduras, 
        listaLupulos, 
        listaMaltas,
        listaComidas,
    } = props;

    const [value, setValue] = useState<number[]>([0, 100]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
      ) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setFiltro({...filtro, rangoOG: [Math.min(newValue[0], filtro.rangoOG[1] - minDistance), filtro.rangoOG[1]]})
        } else {
          setFiltro({...filtro, rangoOG: [filtro.rangoOG[0], Math.max(newValue[1], filtro.rangoOG[0] + minDistance)]})
        }
    };

    const seleccionarFiltro = (e: any) => {
        let valor = e.target.value;
        let id = e.target.id;

        let lista = filtro[id].slice();
        let encontrado = lista.find((f: string) => f === valor);

        if (encontrado) lista = lista.filter((f: string) => f !== encontrado);
        else lista.push(valor);

        setFiltro({...filtro, [id]: lista});
    }

    const marks = [
        {
            value : filtro.rangoOG[0],
            label : `${1000 + filtro.rangoOG[0]}`
        },
        {
            value : filtro.rangoOG[1],
            label : `${1000 + filtro.rangoOG[1]}`
        },
    ]

    const showBtnFiltro = (filtro && (filtro.per_page > 25 || filtro.listaLevaduras.length > 0 || filtro.listaLupulos.length > 0 || filtro.listaMaltas.length > 0 || filtro.listaComidas.length > 0 || filtro.rangoOG[0] > 0 || filtro.rangoOG[1] < 100));

    return (
        <div className="flex flex-col w-full items-center">
            <Card sx={{ minWidth: 275 }}>
                <CardContent className="leading-loose" style={{paddingBottom: 0}}>
                    <span className="uppercase text-xl font-bold">Filtrar</span>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <span className="uppercase font-light text-sm">OG</span>
                        <div className="flex items-center justify-center">
                            <SliderStyled
                                getAriaLabel={() => 'Temperature range'}
                                value={filtro.rangoOG}
                                onChange={handleChange}
                                style={{color: "#ac3051", width: "85%"}}
                                marks={marks}
                            />
                        </div>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Levadura</span>
                            </AccordionSummary>
                            <AccordionDetails className="max-h-40 overflow-y-auto">
                                <FormGroup>
                                    {
                                        listaLevaduras.map((item: any, index: number) => {
                                            return <FormControlLabel key={index} style={{margin: 0, width: "fit-content"}} control={<BpCheckbox id="listaLevaduras" checked={filtro.listaLevaduras.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
                                        })
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Lúpulo</span>
                            </AccordionSummary>
                            <AccordionDetails className="max-h-40 overflow-y-auto">
                                <FormGroup>
                                    {
                                        listaLupulos.map((item: any, index: number) => {
                                            return <FormControlLabel key={index} style={{margin: 0, width: "fit-content"}} control={<BpCheckbox id="listaLupulos" checked={filtro.listaLupulos.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
                                        })
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Malta</span>
                            </AccordionSummary>
                            <AccordionDetails className="max-h-40 overflow-y-auto">
                                <FormGroup>
                                    {
                                        listaMaltas.map((item: any, index: number) => {
                                            return <FormControlLabel key={index} style={{margin: 0, width: "fit-content"}} control={<BpCheckbox id="listaMaltas" checked={filtro.listaMaltas.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
                                        })
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Comidas</span>
                            </AccordionSummary>
                            <AccordionDetails className="max-h-40 overflow-y-auto">
                                <FormGroup>
                                    {
                                        listaComidas.map((item: any, index: number) => {
                                            return <FormControlLabel key={index} style={{margin: 0, width: "fit-content"}} control={<BpCheckbox id="listaComidas" checked={filtro.listaComidas.includes(item)} value={item} onClick={seleccionarFiltro} key={index} />} label={item} />
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
                    <Button onClick={() => resetFiltro()} color="inherit" style={{fontSize: "1rem", width: "fit-content", lineHeight: 2, marginTop: ".5rem", color: "#d5d4d4"}}>
                        <Close style={{fontSize: "1rem"}} /> Reestablecer Filtro
                    </Button>
                )
            }
        </div>
    )
}

Filtro.defaultProps = {
}

const mapStateToProps = (state: any) => ({
    filtro         : state.main.filtro as FiltroSchema,
    listaLevaduras : state.main.listaLevaduras,
    listaLupulos   : state.main.listaLupulos,
    listaMaltas    : state.main.listaMaltas,
    listaComidas   : state.main.listaComidas,
})

const mapDispatchToProps = {
    setFiltro        : setFiltro,
    resetFiltro      : resetFiltro
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);