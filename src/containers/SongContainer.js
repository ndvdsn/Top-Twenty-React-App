import React, {Component} from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';
import Selector from '../components/Selector';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount(){
    this.loadSongs(this.props.genres[0].url)
  }

  loadSongs(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}))
  }

  handleSelectChange(event) {
    this.loadSongs(event.target.value);
  }

  render(){
    return (
      <div>
        <Selector
          handleSelectChange={this.handleSelectChange}
          genres={this.props.genres}
          />

        <SongList
        songs={this.state.songs}
        url={this.props.genres[0].url}
        handleSelectChange={this.handleSelectChange}

        />
      </div>
    )
  }


}
export default SongContainer;
