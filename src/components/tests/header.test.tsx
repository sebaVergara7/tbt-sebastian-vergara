import { render, RenderResult } from "@testing-library/react";
import Header from "../header";

let component: RenderResult;

beforeEach(() => component = render(<Header/>));

//Verificar que se haya renderizado correctamente cada uno de los elementos de la listaMenu
describe("Header", () => {
    it("Must display VINO", () => {
        expect(component.getByText('VINO'));
    });
    it("Must display VODKA", () => {
        expect(component.getByText('VODKA'));
    });
    it("Must display CHAMPÁN", () => {
        expect(component.getByText('CHAMPÁN'));
    });
    it("Must display COÑAC", () => {
        expect(component.getByText('COÑAC'));
    });
    it("Must display WHISKY", () => {
        expect(component.getByText('WHISKY'));
    });
});