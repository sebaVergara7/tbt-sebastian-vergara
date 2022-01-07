import { render, RenderResult } from "@testing-library/react";
import Layout from "../layout";
import ILayout from "../../interfaces/ILayout";

const parametros = {
    textoChildren : "Prueba",
}

let component: RenderResult;

beforeEach(() => component = render(<Layout><div>{parametros.textoChildren}</div></Layout>));

//Validar que se haya renderizado correctamente el elemento hijo
describe("Layout", () => {
    it("Must display PRUEBA", () => {
        expect(component.getByText(parametros.textoChildren));
    });
});