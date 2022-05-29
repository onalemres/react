import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:3000" },
    { title: "All Star", duration: "3:14" },
    { title: "I Want it That Way", duration: "1:15" },
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer,
});
