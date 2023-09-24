import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        price="$29,740"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="model-3.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $40,240 excluding taxes and
            fees. Subject to change."
      />
      <Section
        title="Model S"
        price="$71,090"
        description="After Est. Gas Savings"
        backgroundImg="model-s.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $74,990 excluding taxes and
            fees. Subject to change."
      />
      <Section
        title="Model Y"
        price="$39,390"
        description="After Federal Tax Credit Est. Gas Savings"
        backgroundImg="model-Y.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $50,490 excluding taxes and
            fees. Subject to change."
      />
      <Section
        title="Model X"
        price="$68,590"
        description="After Est. Gas Savings"
        backgroundImg="model-x.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $74,990 excluding taxes and
            fees. Subject to change."
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
