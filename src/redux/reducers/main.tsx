import * as t from '../types';

const initialState = {
    cerveza       : null,
    filtro        : null,
    listaCervezas : null,
}

const main = (state = initialState, action: any) => {
    switch (action.type) {
        case t.SET_CERVEZA:
            return {
                ...state,
                cerveza: action.value
            };
        case t.SET_FILTRO:
            return {
                ...state,
                filtro: action.value
            };    
        case t.SET_LISTA_CERVEZAS:
            return {
                ...state,
                listaCervezas: action.value
            };        
        default:
            return {...state};
    }
}

export default main;