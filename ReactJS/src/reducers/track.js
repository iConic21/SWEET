import * as types from './../actions/types';

export default function (state = { player: null, track: null }, action) {
    switch (action.type) {
        case types.SET_PLAYING_TRACK:
            if (state.player) state.player.kill();
            return action.payload;
        case types.CLEAR_PLAYER:
            if (state.player) state.player.kill();
            return { player: null, track: null };
        default:
            return state;
    }
}