import React from "react";
import Icon1 from "../../images/info-1.svg";
import Icon2 from "../../images/info-2.svg";
import Icon3 from "../../images/info-3.png";
import {
  H1,
  H2,
  P,
  ServicesCard,
  ServicesContainer,
  ServicesIcon,
  ServicesWrapper,
} from "./ServicesElement";
const Services = () => {
  return (
    <ServicesContainer id="features">
      <H1>Features</H1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <H2>React Router</H2>
          <P>React router helps you to route your site without reloading.</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <H2>React Icons</H2>
          <P>React Icons help you by giving a lot of svg icon.</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon3}
            style={{ background: "black" }}
          ></ServicesIcon>
          <H2>React Styled-Components</H2>
          <P>Styled components make your design patter more and more easier.</P>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
