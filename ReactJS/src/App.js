import React, { Component } from 'react';
import './Variables.css';
import './App.css';

import Header from './components/header';
import Body from './components/body';

class App extends Component {
    componentWillMount() {
        window.SC.initialize({
            client_id: 'a0f84e7c2d612d845125fb5eebff5b37'
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
