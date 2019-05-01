import { combineReducers } from 'redux'

// Reducers
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: "4:05" },
    { title: 'Macarena', duration: "5:22" },
    { title: 'All Star', duration: "3:10" },
    { title: 'I Want it That Way', duration: "2:53" }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer
})