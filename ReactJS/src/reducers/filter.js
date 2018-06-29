import * as types from './../actions/types';

export default function(state = {phrase: "Party"}, action) {
    switch(action.type) {
        case types.SET_SEARCH_PHRASE:
            return  {...state, ...{phrase: action.payload}};
        default:
            return state;
    }
}