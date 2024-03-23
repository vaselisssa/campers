import styled from "@emotion/styled";
import backgroundImage from "../../assets/images/background.png";

export const HomeContainer = styled.div`
   width: 100vw;
   min-height: calc(100vh - 77px);
   padding: 40px 40px 0 40px;
   color: var(--secondary-color);
   background-image: url(${backgroundImage});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: right;
`;

export const Heading = styled.h1`
   font-size: 48px;
   font-weight: 700;
   margin-bottom: 60px;
`;

export const ServiceTitle = styled.h2`
   font-size: 32px;
   font-weight: 500;
   margin-bottom: 40px;
`;

export const ServiceList = styled.ul`
   width: 600px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`;

export const ServiceItem = styled.li`
   font-size: 24px;
   font-weight: 400;
   text-shadow: 0 0 20px #ffffff;
`;
