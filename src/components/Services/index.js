import React from "react";

import icon1 from "../../Images/svg-1.svg";
import icon2 from "../../Images/svg-2.svg";
import icon3 from "../../Images/svg-3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH1,
  ServicesP,
  ServicesIcon,
  ServicesWrapper,
} from "./ServicesElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            {" "}
            we help reduce your fess and aincreas your revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>virtual office</ServicesH2>
          <ServicesP> access online</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>premiun benienig</ServicesH2>
          <ServicesP>
            {" "}
            we help reduce your fess and aincreas your revenue
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
