import React from "react";
import styled from "styled-components";

function NavBar({ setCategory, category, setSearchTerm }) {
    return (
        <Container>
            <MenuContainer>
                <Menu
                    className={category === "" && "active"}
                    onClick={() => setCategory("")}
                >
                    All
                </Menu>
                <Menu
                    className={category === "men" && "active"}
                    onClick={() => setCategory("men")}
                >
                    Men
                </Menu>
                <Menu
                    className={category === "women" && "active"}
                    onClick={() => setCategory("women")}
                >
                    Women
                </Menu>
                <Menu
                    className={category === "electronics" && "active"}
                    onClick={() => setCategory("electronics")}
                >
                    Electronics
                </Menu>
                <Menu
                    className={category === "jewelery" && "active"}
                    onClick={() => setCategory("jewelery")}
                >
                    Jewellery
                </Menu>
            </MenuContainer>
            <SearchSection>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
            </SearchSection>
        </Container>
    );
}

export default NavBar;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
`;
const Menu = styled.div`
    margin-right: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #7c7c80;
    position: relative;

    &.active {
        color: #000;
        ::after {
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            background-color: #000;
            position: absolute;
            bottom: -10px;
        }
    }
    &:hover {
        transition: all 0.3s;
        color: #000;
        ::after {
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            background-color: #000;
            position: absolute;
            bottom: -10px;
        }
    }
    &:last-child {
        margin-right: 0;
    }
`;
const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Button = styled.span`
    display: block;
    width: 30px;
`;
const SearchSection = styled.div`
    width: 30%;
    height: 30px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
        border: none;
        flex: 1;
        padding: 0 10px;
        :focus {
            outline: none;
        }
    }
`;
