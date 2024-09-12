import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return <Wrapper>
      <div >

        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                     <h3>Ready to get started</h3>
                     <h3>let's talk</h3>
                </div>
                <div>
                    <Button>Get started</Button>
                </div>
            </div>
        </section>

        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Waliul`s Store</h3>
                    <p>We will get everything here!</p>
                </div>

                <div className="footer-subscribe">
                    <h3>subscribe to get important updates</h3>
                    <form action="#"> 
                        <input type="email" placeholder="email"/>
                        <Button>Send</Button>
                    </form>
                </div>

                <div className="footer-social">
                  <h3>Follow us</h3>
                  <div className="footer-social--icons">
                    <div> <a href="https://www.youtube.com/@LearnersOfEverything4321" target="blank"><FaFacebook className="icons"/></a></div>
                    <div> <a href="https://www.youtube.com/@LearnersOfEverything4321" target="blank"><FaYoutube className="icons"/></a></div>
                    <div> <a href="https://www.youtube.com/@LearnersOfEverything4321" target="blank"><FaLinkedin className="icons"/></a></div>
                  </div>
                </div>

                <div className="footer-contact">
                    <h3>Call us</h3>
                    <h3>+88 0569866545</h3>
                </div>
            </div>

            <div className="footer-bottom--section">
              <hr/>
              <div className="container grid grid-two-column">
                  <p>@{new Date().getFullYear()} copyright goes to waliul hasan</p>
                  <div>
                      <h3>Privacy policy</h3>
                      <h3>Terms and conditions</h3>
                  </div>
              </div>

            </div>

        </footer>

      </div>
    </Wrapper>
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;