// import React, {Component} from 'react';
// import { PlayButton, Progress, Timer } from 'react-soundplayer/components';

// export default class Track extends Component {
//   render() {
//     const { track, soundCloudAudio, playing, seeking, currentTime, duration } = this.props;
//     const currentProgress = this.props.currentTime / this.props.duration * 100 || 0;

//     return (
//       <div className="player">
//         <PlayButton
//           className="orange-button"
//           soundCloudAudio={soundCloudAudio}
//           playing={playing}
//           seeking={seeking} />
//         <Timer
//           duration={duration}
//           className="timer"
//           soundCloudAudio={soundCloudAudio}
//           currentTime={currentTime} />
//         <div className="track-info">
//           <h2 className="track-title">{track && track.title}</h2>
//           <h3 className="track-user">{track && track.user && track.user.username}</h3>
//         </div>
//         <Progress
//           className="progress-container"
//           innerClassName="progress"
//           soundCloudAudio={soundCloudAudio}
//           value={currentProgress} />
//       </div>
//     );
//   }
// }



import React, {Component} from 'react';
import { PlayButton, Progress, Timer } from 'react-soundplayer/components';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass ({
  render() {
    const { track, soundCloudAudio, playing, seeking, currentTime, duration } = this.props;
    const currentProgress = this.props.currentTime / this.props.duration * 100 || 0;
    const image_url = track && track.artwork_url;

    return (
      <div className="col-md-3" style={{marginTop: 20}}>
        <Card>
          <CardMedia  
            overlay={<Progress
            className="progress-container"
            innerClassName="progress"
            soundCloudAudio={soundCloudAudio}
            value={currentProgress} />}>

            <img src={image_url !== null? image_url: 'https://cdn3.iconfinder.com/data/icons/document-icons-2/30/647709-image-128.png' }/>
          </CardMedia>
          <CardTitle 
            className="truncate" 
            title={track && track.title} 
            subtitle={<Timer
              duration={duration}
              soundCloudAudio={soundCloudAudio}
              currentTime={currentTime} />} 
          />
          <CardText className="truncate">
            {track && track.description}
          </CardText>
          <CardActions>
            <PlayButton
              className="orange-button"
              soundCloudAudio={soundCloudAudio}
              playing={playing}
              seeking={seeking} />
          </CardActions>
        </Card>
      </div>
    );
  }
})
