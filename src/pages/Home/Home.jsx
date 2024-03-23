import React from "react";
import {
   HomeContainer,
   Heading,
   ServiceTitle,
   ServiceList,
   ServiceItem,
} from "./Home.styled";

const Home = () => {
   return (
      <HomeContainer>
         <Heading>Welcome to Campers Rental Services</Heading>
         <ServiceTitle>Our Services</ServiceTitle>
         <ServiceList>
            <ServiceItem>
               <strong>Camper Rentals:</strong> Choose from a variety of campers
               of different sizes and configurations.
            </ServiceItem>
            <ServiceItem>
               <strong>Location Filters:</strong> Easily find campers available
               in your preferred location.
            </ServiceItem>
            <ServiceItem>
               <strong>Equipment Options:</strong> Filter campers based on
               specific equipment requirements.
            </ServiceItem>
            <ServiceItem>
               <strong>Types of Campers:</strong> Browse through various camper
               types to find the perfect match for your adventure.
            </ServiceItem>
         </ServiceList>
      </HomeContainer>
   );
};

export default Home;
