import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import {useProductContext} from "./context/productcontext"
;
const About = () => {
  const Wrapper = styled.section`
  height: 100%;
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  const data = {name: "About waliul`s Ecommers store"};

  const {name, age, id} = useProductContext(); //context

  return <Wrapper>
    {name}
    {age}
    {id}
    <HeroSection data={data}/>
  </Wrapper>;
};

export default About;
