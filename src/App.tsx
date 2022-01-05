import Layout from "./components/layout";
import { Square } from "@mui/icons-material";
import apiCerveza from "./api/apiCerveza";
import { Fragment, useEffect } from "react";
import Filtro from "./components/filtro";
import ItemCerveza from "./components/itemCerveza";
import { connect } from "react-redux";
import CervezaSchema from "./models/CervezaSchema";
import * as actions from './redux/actions/main';
import { Button } from "@mui/material";

function App(props: any) {
  
  const { listaCervezas, filtro, setListaCervezas } = props;

  useEffect(() => getCervezas(), []);
  
  const getCervezas = () => {
    apiCerveza.getCervezas().then((resp) => {
      if (resp && resp.status === 200) setListaCervezas(resp.data);
    })
  }

  return (
    <Layout>
      <Fragment>
        <div className="w-full flex flex-col items-center justify-center uppercase">
          <div className="text-sm w-1/5 justify-center inline-flex items-center leading-10">
            <span className="underline">Casa</span>
            <Square style={{fontSize: ".5rem", color: "#d5d4d4"}} className="rotate-45 mx-2"/>
            <span style={{color: "#d5d4d4"}}>Catálogo principal</span>
          </div>
          <span className="text-4xl leading-loose">Catálogo principal</span>
        </div>
        <div className="w-full flex">
          <div className="w-1/3">
            <Filtro />
          </div>
          <div className="w-2/3 flex flex-col">
            <div className="w-full flex flex-wrap">
              {
                listaCervezas && listaCervezas.map((cerveza: CervezaSchema, index: number) => <ItemCerveza key={index} props={{cerveza: cerveza}}/>)
              }
            </div>
            <div className="flex w-full items-center justify-center mt-5">
              <div className="w-1/3">
                <Button variant="outlined" style={{color: "#ac3051", borderColor: "#ac3051", padding: ".5rem 4rem"}}>Mostrar más</Button>
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
}

const mapStateToProps = (state: any) => ({
  listaCervezas : state.main.listaCervezas,
  filtro        : state.main.filtro
})

const mapDispatchToProps = {
  setListaCervezas: actions.setListaCervezas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
