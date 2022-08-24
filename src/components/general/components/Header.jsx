import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <LeftSection>
                <Menu to="/">Home</Menu>
                <Menu to="#">Shop</Menu>
                <Menu to="#">Features</Menu>
            </LeftSection>
            <MiddleSection>
                <Logo to="/">
                    <img
                        src={require("../../../assets/images/logo.svg").default}
                        alt="Logo"
                    />
                </Logo>
            </MiddleSection>
            <RightSection>
                <SearchInput></SearchInput>

                <Button>
                    <i class="fa-solid fa-user"></i>
                </Button>
                <Button>
                    <i class="fa-solid fa-cart-shopping"></i>
                </Button>
            </RightSection>
        </Container>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    height: 100px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 9999;
    background-color: #fff;
`;
const LeftSection = styled.div`
    flex: 1;
`;
const MiddleSection = styled.h1``;
const RightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;
const Menu = styled(NavLink)`
    margin-right: 30px;
    font-size: 14px;
    text-transform: uppercase;
    transition: all 0.3;
    &:hover {
        opacity: 0.7;
    }
`;
const Logo = styled(Link)``;
const Button = styled.span`
    display: block;
    font-size: 20px;
    margin-left: 30px;
    cursor: pointer;
    transition: all 0.3;
    &:hover {
        opacity: 0.7;
    }
`;
const SearchInput = styled.div``;
