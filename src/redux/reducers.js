import * as actions from '../actions/actions';

export default function reducer(store = [], action){
    switch(action.type){
        
        case actions.LOGIN:
            return {
                 ...store, name: action.payload.name,
                 logged: action.payload.logged
            }
        case actions.CANCEL:
            return {
                ...store, cancel: action.payload.cancel
            }
    }
    return store;
}