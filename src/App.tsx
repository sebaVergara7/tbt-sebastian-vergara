import Layout from "./components/layout";
import { Square } from "@mui/icons-material";
import { Fragment, useEffect } from "react";
import Filtro from "./components/filtro";
import ItemCerveza from "./components/itemCerveza";
import { connect } from "react-redux";
import CervezaSchema from "./models/CervezaSchema";
import { Button } from "@mui/material";
import { setFiltro, setListaCervezas, setListaCervezasAux } from "./redux/actions/main";
import apiCerveza from "./api/apiCerveza";

const maxItems = 80;

const App = (props: any) => {
  
  const { listaCervezas, filtro, setListaCervezas, setListaCervezasAux, setFiltro } = props;

  useEffect(() => getCervezas(), []);

  let listaFiltrada = listaCervezas.slice();

  if (filtro?.listaLevaduras.length > 0){
    listaFiltrada = listaFiltrada.filter((f: any) => filtro.listaLevaduras.includes(f.ingredients.yeast));
  }

  if (filtro?.listaLupulos.length > 0){
    listaFiltrada = listaFiltrada.filter((f1: any) => f1.ingredients.hops.find((f2: any) => filtro.listaLupulos.includes(f2.name)));
  }

  if (filtro?.listaMaltas.length > 0){
    listaFiltrada = listaFiltrada.filter((f1: any) => f1.ingredients.malt.find((f2: any) => filtro.listaMaltas.includes(f2.name)));
  }

  if (filtro?.listaComidas.length > 0){
    listaFiltrada = listaFiltrada.filter((f1: any) => f1.food_pairing.find((f2: any) => filtro.listaComidas.includes(f2)));
  }

  if (filtro?.rangoOG){
    listaFiltrada = listaFiltrada.filter((f: any) => f.target_og >= (filtro.rangoOG[0] + 1000) && f.target_og <= (filtro.rangoOG[1] + 1000));
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
    let per_page = (listaFiltrada.length > 0 && (filtro.per_page + 25) < 80) ? filtro.per_page + 25 : 80; 
    apiCerveza.getCervezas({...filtro, per_page: per_page}).then((resp) => {
      setFiltro({...filtro, per_page});
      setListaCervezas(resp?.data);
    })
  }

  return (
    <Layout>
      <Fragment>
        <div className="w-full flex flex-col items-center justify-center uppercase">
          <div className="text-sm w-full md:w-1/5 lg:w-1/5 justify-center inline-flex items-center leading-10">
            <span className="underline">Casa</span>
            <Square style={{fontSize: ".5rem", color: "#d5d4d4"}} className="rotate-45 mx-2"/>
            <span style={{color: "#d5d4d4"}}>Catálogo principal</span>
          </div>
          <span className="text-2xl lg:text-4xl md:text-4xl leading-loose text-center">Catálogo principal</span>
        </div>
        <div className="w-full flex flex-col lg:flex-row md:flex-row mt-0 lg:mt-2 md:mt-2">
          <div className="w-full lg:w-1/4 md:w-1/4 px-3 lg:px-0 md:px-0">
            <Filtro />
          </div>
          <div className="mt-2 lg:mt-0 md:mt-0 w-full lg:w-3/4 md:w-3/4 flex flex-col">
            <div style={{maxHeight: "45vh"}} className={`w-full flex flex-wrap ${listaFiltrada?.length === 0 && "items-center h-full"} overflow-y-auto overflow-x-hidden`}>
              {
                listaFiltrada?.length > 0 
                ? listaFiltrada.map((cerveza: CervezaSchema, index: number) => <ItemCerveza key={index} props={{cerveza: cerveza}}/>)
                : (<span style={{color: "#d5d4d4"}} className="uppercase mx-auto p-5 border-2 rounded-md">No existen registros</span>)
              }
            </div>
            {
              listaCervezas?.length !== maxItems && (
                <div className="flex w-full items-center justify-center mt-5">
                  <div className="flex items-center justify-center w-full lg:w-1/3 md:w-1/3">
                    <Button className="cardButton" onClick={aumentarItemsPorPagina} variant="outlined" style={{color: "#ac3051", borderColor: "#ac3051", padding: ".5rem 4rem"}}>Mostrar más</Button>
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
  listaCervezas : state.main.listaCervezas,
  filtro        : state.main.filtro,
})

const mapDispatchToProps = {
  setFiltro           : setFiltro,
  setListaCervezas    : setListaCervezas,
  setListaCervezasAux : setListaCervezasAux
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
