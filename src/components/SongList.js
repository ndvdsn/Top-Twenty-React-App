import React from 'react';
import Song from './Song';

const SongList = (props) => {

  const songItems = props.songs.map(song => {
    return (
      <Song title={[song.title]} key={[song.id]}>{[song.artist]}</Song>
    )
  })

  return (
    <div className="song-list">

    {songItems}

    </div>
  )
}
export default SongList;
