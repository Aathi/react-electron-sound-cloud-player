
import React, {Component, PropTypes} from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import Track from './Track';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

export default class ProgressSoundPlayer extends Component {
  render() {
    const {resolveUrl, clientId} = this.props;
    return (
      <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
        <Track />
      </SoundPlayerContainer>
    );
  }
}

ProgressSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};
