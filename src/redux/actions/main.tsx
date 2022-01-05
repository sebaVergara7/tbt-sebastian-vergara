import CervezaSchema from '../../models/CervezaSchema';
import * as t from '../types';

export const setCerveza = (cerveza: CervezaSchema) => ({
    type : t.SET_CERVEZA,
    value: cerveza
});

export const setFiltro = (filtro: any) => ({
    type : t.SET_FILTRO,
    value: filtro
});

export const setListaCervezas = (listaCervezas: CervezaSchema[]) => ({
    type : t.SET_LISTA_CERVEZAS,
    value: listaCervezas
});