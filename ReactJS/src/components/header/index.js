import React, { Component } from 'react';

import './style.css';

class Header extends Component {

    handleLinkClick(link) {
        var win = window.open(link, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="header">
                <div className="header__container container">
                    <div className="header__logo-container">
                        <img src="/images/Logo.svg" alt="sweet logo" />
                        <div>SWEET</div>
                    </div>
                    <div className="header__options-container">
                        <div className="header__option"><i className="fab fa-react active"></i></div>
                        {/* <div className="header__option"><i className="fab fa-angular"></i></div>
                        <div className="header__option"><i className="fab fa-vuejs"></i></div>
                        <div className="header__option"><i className="fab fa-html5"></i></div> */}
                        <div className="header__option-split"></div>
                        <div className="header__option" onClick={this.handleLinkClick.bind(this, "https://github.com/iConic21/SWEET")} ><i className="fab fa-github"></i></div>
                        <div className="header__option" onClick={this.handleLinkClick.bind(this, "https://www.linkedin.com/in/yasharzolmajdi")}><i className="fab fa-linkedin-in"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
