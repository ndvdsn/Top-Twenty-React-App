import React, { Component } from 'react';
import SongContainer from "./containers/SongContainer"


class App extends Component {
  render() {

    const genres = [
      {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
      {name: "World", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=19/json"},
      {name: "Soundtrack", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=16/json"},
      {name: "Light Folk", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=10/json"},
      {name: "Mysterious", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=3/json"},
      {name: "Child Noise", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=4/json"},
      {name: "Light Light", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=5/json"},
      {name: "Country Lows", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"},
      {name: "Internet Era Pop", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=7/json"},
      {name: "Commercial Christian", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=8/json"},
      {name: "Opera", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=9/json"},
      {name: "Limited Jazz Vocal", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=11/json"},
      {name: "World Urban", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=12/json"},
      {name: "Esoterica", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=13/json"},
      {name: "Soul Funk Disco", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=15/json"}
    ]


    return (
      <SongContainer genres={genres} />
    );
  }
}

export default App;
