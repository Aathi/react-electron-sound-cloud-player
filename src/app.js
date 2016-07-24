import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProgressSoundPlayer from './components/ProgressSoundPlayer';
import SC from 'node-soundcloud';
import Loading from 'react-loading';
import client_id from './../config.js'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


SC.init({
  id: client_id
});

class Main extends Component {
  constructor(props){
    super();

    this.state = {
      query: '',
      hasResults: false,
      searchResults: [],
      isLoading: false
    };
  }

  handleTextChange(event) {
    this.setState({
      query: event.target.value
    });
    if(event.key === 'Enter'){
      this.search.call(this);
    }
  }

  search(){
    this.setState({
      isLoading: true
    });

    SC.get('/tracks', {
      q: this.state.query,
      embeddable_by: 'all'
    }, (err, tracks) => {
      console.log(tracks);
      if(!err){
        this.setState({
          hasResults: true,
          searchResults: tracks,
          isLoading: false
        });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div >
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h1>Electron SoundCloud Player</h1>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-3">
           <TextField
            hintText="Hint Text"
            floatingLabelText="Enter song name or Artist..."
            onKeyDown={this.handleTextChange.bind(this)}
          />
          <RaisedButton 
            label="Search" 
            secondary={true} 
            onClick={this.search.bind(this)}
          />
          </div>
          <div className="center">
            {this.state.isLoading && <Loading type="bars" color="#FFB935" />}
          </div>
          {this.state.hasResults && !this.state.isLoading ?
           this.renderSearchResults.call(this) :
           this.renderNoSearchResults.call(this)}
        </div>
      </MuiThemeProvider>
    );
  }

  renderNoSearchResults(){
    return (
      <div id="no-results"></div>
    );
  }

  renderSearchResults(){
    return (
      <div id="search-results">
        {this.state.searchResults.map(this.renderPlayer.bind(this))}
      </div>
    );
  }

  renderPlayer(track) {
    return (
      <ProgressSoundPlayer
        key={track.id}
        clientId={client_id}
        resolveUrl={track.permalink_url} />
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
