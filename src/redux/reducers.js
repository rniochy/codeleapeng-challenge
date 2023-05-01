import * as actions from '../actions/actions';
import { getData } from '../assets/datecalculator';

export default function reducer(store = [], action){

    switch(action.type){
        case actions.LOGIN:
            const{ name,logged,cancel,delete_,edite,results,next,previous} = action.payload;
            return {
                 ...store, 
                 name,
                 logged,
                 cancel,
                 delete_,
                 edite,
                 results,
                 next,
                 previous
            }
        case actions.CANCEL:
            return {
                ...store, 
                cancel: action.payload.cancel,
                edite: action.payload.edite,
                delete_: action.payload.delete_
            }
        case actions.DELETE:
            return {
                ...store, 
                delete_: action.payload.delete_,
                edite: action.payload.edite,
                cancel: action.payload.cancel,
                id: action.payload.id
            }
        case actions.EDITE:
            return {
                ...store, 
                edite: action.payload.edite,
                delete_: action.payload.delete_,
                cancel: action.payload.cancel,
                id: action.payload.id
            }
        case actions.UPDATE:
            return {
                ...store, 
                 results: action.payload.results,
                 next: action.payload.next,
                 previous: action.payload.previous
            }
    }
    return store;
}