import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../actions';

import './style.css';
import Filter from './filter';
import Card from './card';
import Player from './player';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: false
        };
    }

    componentDidMount() {
        var me = this;
        me.refs.body.addEventListener('scroll', function () {
            if (me.refs.body.scrollTop >= 10) me.setState({ sticky: true });
            else me.setState({ sticky: false });
        });
        me.props.fetch_tracks();
    }

    handleRefreshTracks(phrase) {
        this.props.clear_tracks();
        this.props.fetch_tracks(phrase);
    }

    render() {
        return (
            <div className="body" ref="body">
                <Filter sticky={this.state.sticky} refreshTracks={this.handleRefreshTracks.bind(this)} />
                <div className="body__cards">
                    <div className="body__cards__container container">
                        {this.props.tracks.collection.map((track) => {
                            return <Card data={track} key={track.id} />
                        })}
                        {
                            this.props.tracks.collection.length <= 0 &&

                            (<div className="body__cards__loader">
                                <div class="loader"></div>
                            </div>)
                        }
                    </div>
                </div>
                {this.props.track.player && <Player />}
            </div>
        );
    }
}

function mapStateToProps({ tracks, track }) {
    return { tracks, track }
}

export default connect(mapStateToProps, actions)(Body);
