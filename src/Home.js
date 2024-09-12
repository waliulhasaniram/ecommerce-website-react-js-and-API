import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";


export default function Home() {
  const data = {name: "waliul`s Ecommers store"};

  return <Wrapper>
   
   <HeroSection data={data}/>
   <FeatureProducts />
   <Services />
   <Trusted /> 

   </Wrapper>;
};
  
  const Wrapper = styled.section`
   height: 100%;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

