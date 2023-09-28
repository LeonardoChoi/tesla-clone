import React from "react";
import styled from "styled-components";
import {
  PiGlobeLight,
  PiUserCircleBold,
  PiQuestionLight,
} from "react-icons/pi";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
      </Menu>
      <RightMenu>
        <a>
          <PiQuestionLight size={28} />
        </a>
        <a>
          <PiGlobeLight size={28} />
        </a>
        <a>
          <PiUserCircleBold size={28} />
        </a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  aling-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;

  a {
    display: flex;
    align-items: center;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin: 0;
    padding: 4px;
  }
`;
