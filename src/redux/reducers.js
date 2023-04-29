import * as actions from '../actions/actions';
// import results from '../../fakeData/fakedata'
import fetchData from '../actions/data';


 const {data} = await fetchData()
 
// const {data} = getdata
const {results} = data
console.log(results)
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
                 edite,
                 results,
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
                 results: action.payload.results
            }
    }
    return store;
}