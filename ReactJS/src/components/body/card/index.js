import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../../actions';

import './style.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        };
    }

    getArtWork() {
        if (this.props.data.artwork_url) return this.props.data.artwork_url.replace('-large', '-t500x500');
    }

    handleCardClick() {
        this.props.clear_player();
        this.props.set_playing_track(this.props.data);
    }

    render() {
        return (
            <div className={"card" + (this.props.track.track && this.props.track.track.id === this.props.data.id ? " playing" : "")} onClick={this.handleCardClick.bind(this)}>
                <div className="card__container">
                    <div className="card__image">
                        <img src={this.getArtWork() || "/images/artwork.png"} alt="track artwork" />
                    </div>
                    <div className="card__user">
                        {this.props.data.user.username}
                    </div>
                    <div className="card__name">
                        {this.props.data.title}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ track }) {
    return { track }
}

export default connect(mapStateToProps, actions)(Body);
