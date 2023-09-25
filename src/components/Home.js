import React from "react";
import styled from "styled-components";
import Section from "./Section";
import "../index.css";
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        price="From $29,740*"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="model-3.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $40,240 excluding taxes and
            fees. Subject to change."
        aboutSavings="Learn About est. gas savings"
      />
      <Section
        title="Model Y"
        price="From $39,390*"
        description="After Federal Tax Credit Est. Gas Savings"
        backgroundImg="model-Y.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $50,490 excluding taxes and
            fees. Subject to change."
        aboutSavings="Learn About est. gas savings"
      />
      <Section
        title="Model S"
        price="From $71,090*"
        description="After Est. Gas Savings"
        backgroundImg="model-s.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $74,990 excluding taxes and
            fees. Subject to change."
        aboutSavings="Learn About est. gas savings"
      />
      <Section
        title="Model X"
        price="From $68,590*"
        description="After Est. Gas Savings"
        backgroundImg="model-x.jpg"
        leftBtnText="Oder Now"
        rightBtnText="Demo Drive"
        bottomText="*Price before incentives and savings is $74,990 excluding taxes and
            fees. Subject to change."
        aboutSavings="Learn About est. gas savings"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
