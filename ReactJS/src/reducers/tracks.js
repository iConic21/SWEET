import * as types from './../actions/types';

export default function(state = {collection:[]}, action) {
    switch(action.type) {
        case types.FETCH_TRACKS:
            return  action.payload;
        case types.CLEAR_TRACKS:
            return {collection:[]};
        default:
            return state;
    }
}