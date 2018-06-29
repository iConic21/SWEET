import React, { Component } from 'react';

import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__container container">
                    <div className="header__logo-container">
                        <img src="/images/logo.svg" alt="sweet logo" />
                        <div>SWEET</div>
                    </div>
                    <div className="header__options-container">
                        <div className="header__option"><i className="fab fa-react"></i></div>
                        <div className="header__option"><i className="fab fa-angular"></i></div>
                        <div className="header__option"><i className="fab fa-vuejs"></i></div>
                        <div className="header__option"><i className="fab fa-html5"></i></div>
                        <div className="header__option-split"></div>
                        <div className="header__option"><i className="fab fa-github"></i></div>
                        <div className="header__option"><i className="fab fa-linkedin-in"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
