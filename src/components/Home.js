import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
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
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
