import { render, RenderResult } from "@testing-library/react";
import ItemCerveza from "../itemCerveza";
import IItemCerveza from "../../interfaces/IItemCerveza"; 
import CervezaSchema from "../../models/CervezaSchema";

const item = new CervezaSchema({name: "prueba", abv: 1, id: 1, image_url: "img", ingredients: {yeast: "Saflager S189"}, ph: 1234 });

const iItemCerveza: IItemCerveza = {
    props: {
        cerveza: item as CervezaSchema,
        listaLevaduras: [
            {name: "Saflager S189",
            color: "red"}
        ]

    }
}

let component: RenderResult;

beforeEach(() => component = render(<ItemCerveza props={{cerveza: iItemCerveza.props.cerveza, listaLevaduras: iItemCerveza.props.listaLevaduras}}/>));

describe("ItemCerveza", () => {
    //Validar que se haya renderizado correctamente el texto de levadura
    it("Must display YEAST", () => {
        expect(component.getByText(item.ingredients.yeast));
    });

    //Validar que se haya coloreado correctamente el texto de levadura
    it("Must display correct color", () => {
        expect(component.getByText(item.ingredients.yeast)).toHaveStyle('color: red');
    });   
});