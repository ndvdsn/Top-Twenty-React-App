import React from 'react';

const Song = (props) => {
  // const altTag = `${this.props.title} by ${this.props.artist}`;

  return (
    <div className="song">
      <img
        src={props.image}
      />
      <audio
        ref={(audio) => audio = audio}
        id={'audio' + props.position}
        src={props.audio} controls/>

      <div className="details">
        <h4>Title: {props.title}</h4>
        <h4>Artist: {props.artist}</h4>
        <h4>Position: {props.position}</h4>
      </div>




    </div>
  )
}
export default Song;
