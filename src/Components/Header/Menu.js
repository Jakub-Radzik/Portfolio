import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav id="menu">
                <div id="menu-item">O mnie</div>
                <div id="menu-item">Technologie</div>
                <div id="menu-item">Projekty</div>
                <div id="menu-item">Kontakt</div>
            </nav>
        );
    }
}

export default Menu;