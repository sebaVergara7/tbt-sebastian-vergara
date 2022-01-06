import CervezaSchema from '../../models/CervezaSchema';
import * as t from '../types';

export const setFiltro = (filtro: any) => ({
    type : t.SET_FILTRO,
    value: filtro
});

export const resetFiltro = () => ({
    type : t.RESET_FILTRO
});

export const setListaCervezas = (listaCervezas: CervezaSchema[]) => (
    {
        type : t.SET_LISTA_CERVEZAS,
        value: listaCervezas
    }    
);

export const setListaCervezasAux = (listaCervezas: CervezaSchema[]) => (
    {
        type : t.SET_LISTA_CERVEZAS_AUX,
        value: listaCervezas
    }    
);