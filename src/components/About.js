import React from "react";
import Header from "../Header";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function About({ handleSwitchTheme }) {
  return (
    <div>
      <Header handleSwitchTheme={handleSwitchTheme} />
      <MainSection>
        <ContentSection>
          <Title>About Me.</Title>
          <Background>
            <UL>
              <List>
                <OuterLinkLeft>Aenean</OuterLinkLeft>
                <OuterLinkRight>View Aenean</OuterLinkRight>
                <P>
                  Aenean non tristique massa. Nulla facilisi. Donec molestie
                  venenatis nisl vitae varius. Fusce elementum quis tellus in
                  rhoncus. Sed ac felis at tortor porttitor gravida. Fusce
                  volutpat urna at lorem fermentum, ac eleifend sapien cursus.
                  Donec nec ultrices nulla. Curabitur sit amet dignissim nisi.
                  Nulla vitae feugiat tellus.
                </P>
              </List>
              <List>
                <OuterLinkLeft>Curabitur</OuterLinkLeft>
                <OuterLinkRight>View Aenean</OuterLinkRight>
                <P>
                  In nec mauris sed nunc convallis placerat eget in risus. Morbi
                  non erat id enim hendrerit porttitor. Pellentesque iaculis,
                  nibh a lobortis ultricies, tortor tortor accumsan elit, id
                  interdum est purus ut nisi. Vivamus consequat et elit quis
                  maximus. Donec ultrices tristique risus, eu auctor felis
                  lacinia sit amet. Nulla sollicitudin ante nec lobortis
                  faucibus. Mauris fringilla nulla urna, ac semper nisl
                  vulputate sed. Maecenas venenatis convallis turpis et
                  sagittis. Phasellus tincidunt, lorem at venenatis tempus, enim
                  arcu sodales sapien, at rutrum sem lacus in erat.
                </P>
              </List>
              <List>
                <OuterLinkLeft>Mauris</OuterLinkLeft>
                <OuterLinkRight>View Mauris</OuterLinkRight>
                <P>
                  Duis faucibus dui eu ligula pulvinar, a elementum tortor
                  dictum. Duis laoreet, lectus eu dapibus vehicula, erat mi
                  maximus eros, nec condimentum dui nisl eu enim. Maecenas neque
                  turpis, accumsan tincidunt diam eu, finibus ullamcorper metus.
                  Pellentesque a placerat tellus. Sed sapien nisi, efficitur in
                  diam sed, semper fringilla lorem. Quisque at diam at arcu
                  viverra laoreet. Fusce ullamcorper sed libero sed posuere.
                </P>
              </List>
            </UL>
          </Background>
        </ContentSection>

        <ContentSection>
          <Title>Technologies I have been studying on.</Title>
          <Background>
            <UL>
              <List>
                <OuterLinkLeft>Aenean</OuterLinkLeft>
                <OuterLinkRight>View Aenean</OuterLinkRight>
                <P>
                  Aenean non tristique massa. Nulla facilisi. Donec molestie
                  venenatis nisl vitae varius. Fusce elementum quis tellus in
                  rhoncus. Sed ac felis at tortor porttitor gravida. Fusce
                  volutpat urna at lorem fermentum, ac eleifend sapien cursus.
                  Donec nec ultrices nulla. Curabitur sit amet dignissim nisi.
                  Nulla vitae feugiat tellus.
                </P>
              </List>
              <List>
                <OuterLinkLeft>Curabitur</OuterLinkLeft>
                <OuterLinkRight>View Aenean</OuterLinkRight>
                <P>
                  In nec mauris sed nunc convallis placerat eget in risus. Morbi
                  non erat id enim hendrerit porttitor. Pellentesque iaculis,
                  nibh a lobortis ultricies, tortor tortor accumsan elit, id
                  interdum est purus ut nisi. Vivamus consequat et elit quis
                  maximus. Donec ultrices tristique risus, eu auctor felis
                  lacinia sit amet. Nulla sollicitudin ante nec lobortis
                  faucibus. Mauris fringilla nulla urna, ac semper nisl
                  vulputate sed. Maecenas venenatis convallis turpis et
                  sagittis. Phasellus tincidunt, lorem at venenatis tempus, enim
                  arcu sodales sapien, at rutrum sem lacus in erat.
                </P>
              </List>
              <List>
                <OuterLinkLeft>Mauris</OuterLinkLeft>
                <OuterLinkRight>View Mauris</OuterLinkRight>
                <P>
                  Duis faucibus dui eu ligula pulvinar, a elementum tortor
                  dictum. Duis laoreet, lectus eu dapibus vehicula, erat mi
                  maximus eros, nec condimentum dui nisl eu enim. Maecenas neque
                  turpis, accumsan tincidunt diam eu, finibus ullamcorper metus.
                  Pellentesque a placerat tellus. Sed sapien nisi, efficitur in
                  diam sed, semper fringilla lorem. Quisque at diam at arcu
                  viverra laoreet. Fusce ullamcorper sed libero sed posuere.
                </P>
              </List>
            </UL>
          </Background>
        </ContentSection>
      </MainSection>
    </div>
  );
}

export default About;

const MainSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.textc};
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 742px) {
    height: auto;
  }
`;

const ContentSection = styled.section`
  width: 60%;
  height: 50vh;

  @media screen and (max-width: 2385px) {
    height: auto;
  }

  @media screen and (max-width: 742px) {
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin: 5rem 0 1.5rem 0;

  @media screen and (max-width: 1500px) {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 742px) {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
`;

const Background = styled.article``;

const UL = styled.ul`
  list-style: none;
  position: relative;
  margin-top: 0;
  margin-bottom: 1rem;

  &::before {
    content: " ";
    background: ${(props) => props.theme.timeLine};
    display: inline-block;
    position: absolute;
    left: 0px;
    width: 1px;
    top: 4px;
    height: 100%;
  }
`;

const List = styled.li`
  display: list-item;
  margin: 3rem 0px;
  /* padding-left: 20px; */
  line-height: 1.5;

  &::before {
    content: " ";
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgc};
    border: 2px solid ${(props) => props.theme.circle};
    left: -9px;
    width: 15px;
    height: 15px;
    margin-top: 3px;
  }

  @media screen and (max-width: 742px) {
    display: flex;
    flex-flow: column;
  }
`;

const OuterLinkLeft = styled.a`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => props.theme.aboutlc};

  @media screen and (max-width: 742px) {
    font-size: 1rem;
  }
`;

const OuterLinkRight = styled.a`
  float: right;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${(props) => props.theme.aboutlc};
  text-decoration: underline;

  @media screen and (max-width: 742px) {
    font-size: 1rem;
  }
`;

const P = styled.p`
  @media screen and (max-width: 742px) {
    font-size: 0.7rem;
  }
`;
