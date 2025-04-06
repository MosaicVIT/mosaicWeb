import React from "react";
import styled from "styled-components";
// import { FaArrowUpRight, FaFilter } from 'react-icons/fa';
import { GoArrowUpRight as ArrowIcon } from "react-icons/go";
import { IoFilterSharp as FilterIcon } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  /* background-color: #0b121c; */
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: white;
  font-family: "Solid Mono";
  border-bottom: 1px solid white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #5e3fc4;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-grow: 1;
`;

const NavItem = styled.div`
  padding: 0.3rem 1rem;
  border: ${(props) => (props.active ? " 1px solid white" : "none")};
  border-radius: 1.5rem;

  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #0f1a2c;
  border-radius: 2rem;
  padding: 0.3rem 0.2rem;
  border: 1px solid #ccc;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  padding: 0.5rem;
  width: 200px;
  transition: width 0.3s ease-in-out;

  &:focus {
    outline: none;
    width: 300px;
  }
`;

const SearchButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Pages = [
  { name: "For you", path: "/foryou" },
  { name: "Discovery Graph", path: "/discovery" },
  { name: "Timeline", path: "/timeline" },
  { name: "Subscription", path: "/subscription" },
];

const getLastPath = (pathname) => {
  const path = pathname.split("/").filter(Boolean);

  console.log(path);
  return "/" + path[path.length - 1];
};

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <HeaderContainer>
      <img
        src={process.env.PUBLIC_URL + "/mosaic_logo.png"}
        alt="Logo"
        style={{ height: "35px" }}
      />

      <Nav>
        {Pages.map((page) => (
          <Link to={page.path} key={page.name}>
            <NavItem
              key={page.name}
              active={getLastPath(pathname) === page.path}
            >
              {page.name}
            </NavItem>
          </Link>
        ))}
      </Nav>

      <FilterIcon style={{ marginRight: "0.5rem", fontSize: 30 }} />

      <SearchContainer type="text">
        <SearchInput type="text" placeholder="Search" />
        <SearchButton>
          <ArrowIcon />
        </SearchButton>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
