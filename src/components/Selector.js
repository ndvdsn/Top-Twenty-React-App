import React from 'react';

const Selector = (props) => {
  return (
    <div className="selector">
      <h1>TOP 20</h1>
      <select onChange={props.handleSelectChange}>
      {props.genres.map(genre => {
        return <option key={genre.name} value={genre.url}>{genre.name}</option>
      })}
      </select>
    </div>
  );
};

export default Selector;
