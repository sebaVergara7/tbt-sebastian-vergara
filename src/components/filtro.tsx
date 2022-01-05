import { Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, Slider, Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import { Close, ExpandMore } from "@mui/icons-material";
import { connect } from "react-redux";
import { setFiltro } from "../redux/actions/main";

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

const Filtro = (props: any) => {

    const { filtro } = props;

    const [value, setValue] = useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const valuetext = (value: number) => {
        return `$${value}`;
    }

    const marks = [
        {
            value : value[0],
            label : `$${value[0]}`
        },
        {
            value : value[1],
            label : `$${value[1]}`
        },
    ]

    return (
        <div className="flex flex-col w-full items-center">
            <Card sx={{ minWidth: 275 }}>
                <CardContent className="leading-loose" style={{paddingBottom: 0}}>
                    <span className="uppercase text-xl font-bold">Filtrar</span>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <span className="uppercase font-light text-sm">Precio</span>
                        <div className="flex items-center justify-center">
                            <SliderStyled
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                style={{color: "#ac3051", width: "85%"}}
                                marks={marks}
                            />
                        </div>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Color</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Rojo" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Blanco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Rosa" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Azúcar</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Dulce" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Dulce" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="border-b-gray-200 border-b-2 flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">Volúmen</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Dulce" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Dulce" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="flex flex-col py-4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <span className="uppercase font-light text-sm">CTPAHA</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Seco" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Dulce" />
                                    <FormControlLabel style={{margin: 0, width: "fit-content"}} control={<BpCheckbox />} label="Semi Dulce" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </CardContent>
            </Card>
            {
                filtro && (
                    <Button color="inherit" style={{fontSize: "1rem", width: "fit-content", lineHeight: 2, marginTop: ".5rem", color: "#d5d4d4"}}>
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
    filtro: state.main.filtro
})

const mapDispatchToProps = {
    setFiltro: setFiltro
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro);