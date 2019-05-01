import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {
            title: 'Fancy', duration: '4:05'
        },
        {
            title: '사랑 참...', duration: '3:25'
        },
        {
            title: '별이 빛나는 밤', duration: '4:45'
        },
        {
            title: '오늘 헤어졌어요', duration: '3:55'
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});