import React from "react";
import Header from "../Header";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home({ handleSwitchTheme }) {
  return (
    <div>
      <Header handleSwitchTheme={handleSwitchTheme} />
      <HomeSection>
        <HeroContainer>
          <TextContainer>
            <NameHeading>I'm Kaixing Wang</NameHeading>
          </TextContainer>
          <TextContainer>
            <BriefIntro>
              Nulla facilisi. Donec molestie venenatis nisl vitae varius. Fusce
              elementum quis tellus in rhoncus sed ac felis at tortor porttitor.
              Maecenas neque turpis, accumsan tincidunt diam eu, finibus
              ullamcorper metus.
            </BriefIntro>
          </TextContainer>
          <TextContainer>
            <BriefIntro>
              In nec mauris sed nunc convallis placerat eget in risus. Morbi non
              erat id enim hendrerit porttitor. Pellentesque iaculis. Morbi non
              erat id enim hendrerit porttitor. Pellentesque iaculis, nibh a
              lobortis ultricies, tortor tortor accumsan elit, id interdum est
              purus ut nisi. Vivamus consequat et elit quis maximus. Donec
            </BriefIntro>
          </TextContainer>

          <GoAboutMe>
            <GoAboutMeLink to="/personal-portfolio/about">
              Learn More About Me
            </GoAboutMeLink>
            <GoAboutMeIcon>
              <HiArrowNarrowRight />
            </GoAboutMeIcon>
          </GoAboutMe>
        </HeroContainer>
      </HomeSection>
    </div>
  );
}

export default Home;

const HomeSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.textc};
  transition: all 0.4s ease-in-out;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
  height: 70%;
`;

const TextContainer = styled.div`
  width: 100%;
`;

const NameHeading = styled.h1`
  font-size: 7rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const BriefIntro = styled.p`
  width: 70%;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.7rem;
  }
`;

const GoAboutMe = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 2rem 0;
    text-align: center;
  }
`;

const GoAboutMeLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textc};

  &:hover {
    text-decoration: underline;
  }
`;

const GoAboutMeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
  }
`;
