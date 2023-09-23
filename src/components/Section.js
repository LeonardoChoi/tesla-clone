import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <h4>From $71,090*</h4>
        <p>After Est. Gas Savings</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Order Now</LeftButton>
        <RightButton>Demo Drive</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  backgroun-position: center;
  backgroun-repeat: no-repeat;
  background-image: url("images/model-s.jpg");
  display: flex;
  flex-direction: column; // this changes the direction that justiy-content and align-items work
  justify-content: space-between; // usually this aligns things horizontally but since we change the direction of flex-direction to colum now it aligns things vertically
  align-items: center; // this is usually to align things vertically but now it will alignt things horizontally
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin: 15px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacitu: 0.85;
`;

const RightButton = styled(LeftButton)``;
