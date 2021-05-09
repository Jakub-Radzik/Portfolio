import React, {Component} from 'react';

class SiteLogo extends Component {

    logoText = "JAKUB RADZIK";

    render() {
        return (
            <h1 id="logo">
                {`</${this.logoText}>`}
            </h1>
        );
    }
}

export default SiteLogo;