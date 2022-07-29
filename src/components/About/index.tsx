import React from "react";

import { HiArrowRight } from "react-icons/hi";

import { Button } from "../../components/Button";

import {
  Container,
  Heading,
  HtmlSyntaxAboutOne,
  HtmlSyntaxAboutTwo,
  HtmlSyntaxAboutThree,
  HtmlSyntaxAboutFour,
  HtmlSyntaxAboutSix,
  HtmlSyntaxAboutSeven,
  SubHeading,
  ScrollDownButtonLeft,
  ScrollDownButtonRight,
  GlitchtText,
} from "./styles";

const About: React.FC<any> = ({ ref }) => {
  return (
    <Container id="about" ref={ref}>
      <HtmlSyntaxAboutOne className="changeColor">&lt;html&gt;</HtmlSyntaxAboutOne>
      <HtmlSyntaxAboutTwo className="changeColor">&lt;body&gt;</HtmlSyntaxAboutTwo>
      <HtmlSyntaxAboutThree className="changeColor">&lt;h1&gt;</HtmlSyntaxAboutThree>
      <Heading>
        Hi,
        <br /> I&lsquo;m{" "}
        <GlitchtText className="glitch" data-text="B">
          B
        </GlitchtText>
        eans, <br />
        Software Engineer
      </Heading>
      <HtmlSyntaxAboutFour className="changeColor">&lt;h1&gt;</HtmlSyntaxAboutFour>
      <HtmlSyntaxAboutSix className="changeColor">&lt;p&gt;</HtmlSyntaxAboutSix>
      <SubHeading>Front-End Developer / Back-End Developer as well</SubHeading>
      <HtmlSyntaxAboutSeven className="changeColor">&lt;/p&gt;</HtmlSyntaxAboutSeven>

      <Button className="btn-1">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        Contact me!
      </Button>

      <ScrollDownButtonLeft>
        scroll down <HiArrowRight />
      </ScrollDownButtonLeft>

      <ScrollDownButtonRight>
        scroll down <HiArrowRight />
      </ScrollDownButtonRight>
    </Container>
  );
};

export default About;
