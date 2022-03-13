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
  ServiceNotice,
} from "./ServicesElement";
import { ServicesData } from "./ServicesData";

// const Services = () => {
//   return (
//     <ServicesContainer id="services">
//       <ServicesH1>제공 서비스</ServicesH1>
//       <ServicesWrapper>
//         <ServicesCard>
//           <ServicesIcon src={icon1} />
//           <ServicesH2>Reduce expenses</ServicesH2>
//           <ServicesP>
//             {" "}
//             we help reduce your fess and aincreas your revenue
//           </ServicesP>
//         </ServicesCard>
//         <ServicesCard>
//           <ServicesIcon src={icon2} />
//           <ServicesH2>virtual office</ServicesH2>
//           <ServicesP> access online</ServicesP>
//         </ServicesCard>
//         <ServicesCard>
//           <ServicesIcon src={icon3} />
//           <ServicesH2>premiun benienig</ServicesH2>
//           <ServicesP>
//             {" "}
//             we help reduce your fess and aincreas your revenue
//           </ServicesP>
//         </ServicesCard>
//       </ServicesWrapper>
//     </ServicesContainer>
//   );
// };

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>제공 서비스</ServicesH1>
      <ServicesWrapper>
        {ServicesData.map((el, index) => (
          <ServicesCard key={index}>
            <ServicesIcon src={el.icon} />
            <ServicesH2>{el.title}</ServicesH2>
            <ServicesP> {el.description}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
      <ServiceNotice>
        ※ 위 제공 서비스와 더불어 대상자와 직접적인 연관이 있다면 관련서비스
        제공이 가능합니다.
      </ServiceNotice>
    </ServicesContainer>
  );
};

export default Services;
