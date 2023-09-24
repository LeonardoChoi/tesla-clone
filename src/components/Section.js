import React from "react";
import styled from "styled-components";
import "../index.css";

function Section({
  title,
  price,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  bottomText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1 className="text-4xl font-bold">{title}</h1>
        <h4 className="text-xl font-bold">From {price}*</h4>
        <p className="text-xs">{description}</p>
      </ItemText>
      <BottomContainer>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <BottomText>
          <p>{bottomText}</p>
          <AboutSavings>Learn About est. gas savings</AboutSavings>
        </BottomText>
      </BottomContainer>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column; // this changes the direction that justiy-content and align-items work
  justify-content: space-between; // usually this aligns things horizontally but since we change the direction of flex-direction to colum now it aligns things vertically
  align-items: center; // this is usually to align things vertically but now it will alignt things horizontally
  background-image: ${(props) => `url("images/${props.bgImg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: white;
  opacity: 0.95;
  color: black;
  height: 40px;
  width: 256px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacitu: 0.85;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
`;

const BottomContainer = styled.div``;

const BottomText = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;

const AboutSavings = styled.div`
  text-decoration: underline;
`;
