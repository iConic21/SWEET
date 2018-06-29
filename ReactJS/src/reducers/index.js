import { combineReducers } from 'redux';
import tracks from './tracks';
import filter from './filter';
import track from './track';

export default combineReducers({
    tracks,
    filter,
    track
});