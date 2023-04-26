import * as actions from '../actions/actions';

export default function reducer(store = [], action){

    switch(action.type){
        case actions.LOGIN:
            const{ name,logged,cancel,delete_,edite} = action.payload;
            return {
                 ...store, 
                 name,
                 logged,
                 cancel,
                 delete_,
                 edite
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
                cancel: action.payload.cancel
            }
        case actions.EDITE:
            return {
                ...store, 
                edite: action.payload.edite,
                delete_: action.payload.delete_,
                cancel: action.payload.cancel
            }
    }
    return store;
}