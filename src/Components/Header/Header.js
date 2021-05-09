import React, {Component} from 'react';
import SiteLogo from "./SiteLogo";
import Menu from "./Menu";
import styled, {css} from "styled-components";
import Navigation from "react-sticky-nav";

function Header(){

    const Header = styled(Navigation)`
        background-color: #2727b1;
    `;

    const Responsive = styled.nav`
          margin: auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          max-width: 1900px;
          width: 100%;
    `;

    return (
        <Header>
            <Responsive id="responsive">
                <SiteLogo/>
                <Menu/>
            </Responsive>
        </Header>
    );
}

export default Header;