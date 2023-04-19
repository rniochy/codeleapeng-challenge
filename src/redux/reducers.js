import * as actions from '../actions/actions';

export default function reducer(store = [], action){

    switch(action.type){
        case actions.LOGIN:
            return {
                 ...store, name: action.payload.name
            }
    }
    return store;
}