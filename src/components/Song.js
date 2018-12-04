import React from 'react';

const Song = ({song}) => {
  if(!song)
  return (
    <div className="song">

    <p>{[song.title]}</p>
    <p>{[song.artist]}</p>
    </div>
  )
}
export default Song;
