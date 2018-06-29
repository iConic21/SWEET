import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../actions';

class Filter extends Component {

    HandleSearchOnBlur() {
        if (this.props.filter.phrase === this.refs.searchInput.value) return;
        var phrase = this.refs.searchInput.value || "Party";
        this.props.set_search_phrase(phrase);
        if (this.props.refreshTracks) this.props.refreshTracks(phrase);
    }

    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.refs.searchInput.blur();
        }
    }

    render() {
        return (
            <div className={"body__filter" + (this.props.sticky ? " sticky" : "")} ref="filter">
                <div className="body__filter__input-container container">
                    <div className="body__filter__input">
                        <input type="text" placeholder="Party" onKeyUp={this.handleEnterKey.bind(this)} onBlur={this.HandleSearchOnBlur.bind(this)} ref="searchInput" />
                        <i className="fab fa-soundcloud"></i>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ filter }) {
    return { filter }
}

export default connect(mapStateToProps, actions)(Filter);
