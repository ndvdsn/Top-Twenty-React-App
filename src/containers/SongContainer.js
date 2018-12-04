import React from 'react';
import SongList from '../components/SongList'

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}))
  }

  render(){
    return (
      <div>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }


}
export default SongContainer;
