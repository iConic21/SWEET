import * as types from './types';

const fetch_tracks = (search = "Party") => async dispatch => {
    var page_size = 100;
    window.SC.get('/tracks', {
        q: search,
        limit: page_size,
        linked_partitioning: 1
    }).then(function (tracks) {
        console.log(tracks);
        dispatch({ type: types.FETCH_TRACKS, payload: tracks });
    });
};

const clear_tracks = () => async dispatch => {
    dispatch({ type: types.CLEAR_TRACKS, payload: [] });
};

const set_search_phrase = (phrase) => async dispatch => {
    dispatch({ type: types.SET_SEARCH_PHRASE, payload: phrase });
};

const set_playing_track = (track) => async dispatch => {
    window.SC.stream('/tracks/' + track.id).then(function (player) {
        dispatch({
            type: types.SET_PLAYING_TRACK, 
            payload: {
                player,
                track
            }
        });
    });
};

const clear_player = () => async dispatch => {
    dispatch({ type: types.CLEAR_PLAYER, payload: {} });
};

export default {
    fetch_tracks,
    set_search_phrase,
    clear_tracks,
    set_playing_track,
    clear_player
}