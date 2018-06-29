import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../../actions';

import './style.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            time: 0
        };
    }

    componentDidMount() {
        var me = this;
        me.props.track.player.on('time', (time) => {
            me.setState({time});
        })
    }

    getArtWork() {
        if (this.props.track.track.artwork_url) return this.props.track.track.artwork_url.replace('-large', '-t500x500');
    }

    handleClose() {
        this.props.clear_player();
    }

    handlePlay() {
        this.props.track.player.play();
        this.setState({ playing: true });
    }

    handlePause() {
        this.props.track.player.pause();
        this.setState({ playing: false });
    }

    handleBack() {
        this.handlePause();
        this.props.track.player.seek(0);
        this.handlePlay();
    }

    render() {
        return (
            <div className="player">
                <div className="player_track-image">
                    <img src={this.getArtWork() || "/images/artwork.png"} alt="track artwork" />
                </div>
                <div className="player_track-controls">
                    <div className="player_track-controls_info">
                        <div className="card__user">
                            {this.props.track.track.user.username}
                        </div>
                        <div className="card__name">
                            {this.props.track.track.title}
                        </div>
                    </div>
                    <div className="player_track-controls_control">
                        <i className="fas fa-step-backward" onClick={this.handleBack.bind(this)}></i>
                        {
                            this.state.playing ?
                                <i className="fas fa-pause" onClick={this.handlePause.bind(this)}></i> :
                                <i className="fas fa-play" onClick={this.handlePlay.bind(this)} ></i>
                        }
                    </div>
                    <div className="player_duration">
                        <div className="player_duration_progress" style={{width: ((this.state.time/this.props.track.track.duration) * 100) + "%"}} ></div>
                    </div>
                </div>
                <div className="player_track-actions">
                    <i className="fas fa-times" onClick={this.handleClose.bind(this)} ></i>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ track }) {
    return { track }
}

export default connect(mapStateToProps, actions)(Player);
