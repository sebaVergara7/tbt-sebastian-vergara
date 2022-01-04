import Layout from "./components/layout";
import { Square } from "@mui/icons-material";
import cervezaApi from "./api/cervezaApi";
import { Fragment, useEffect } from "react";
import Filtro from "./components/filtro";

function App() {

  useEffect(() => cervezaApi.getCervezas());

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
        </div>
      </Fragment>
    </Layout>
  );
}

export default App;
