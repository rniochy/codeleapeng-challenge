import fetchData from "../../actions/data";
import store from "../../redux/store";
import * as actions from "../../actions/actions";

export default async function updateData(){
    const res_ = await fetchData.get("/");
    const {results,next:next_, previous:previous_} = res_.data;
    store.dispatch({
        type: actions.UPDATE,
        payload: {
            results,
            next: next_,
            previous: previous_
        }
    });
}