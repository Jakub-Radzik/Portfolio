import React, {Component} from 'react';
import SiteLogo from "./SiteLogo";
import Menu from "./Menu";

class Header extends Component {
    render() {
        return (
            <header>
                <div id="responsive">
                    <SiteLogo/>
                    <Menu/>
                </div>
            </header>
        );
    }
}

export default Header;