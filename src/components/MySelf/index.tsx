import React from "react";

import {
  Container,
  Heading,
  HtmlSyntaxAboutOne,
  Content,
  HtmlSyntaxAboutTwo,
  HtmlSyntaxAboutThree,
  HtmlSyntaxAboutFour,
} from "./styles";

const MySelf: React.FC<any> = ({ ref }) => {
  return (
    <Container id="myself" ref={ref}>
      <Content>
        <HtmlSyntaxAboutOne>&lt;h2&gt;</HtmlSyntaxAboutOne>
        <Heading>Me, Myself and I</Heading>
        <HtmlSyntaxAboutTwo>&lt;/h2&gt;</HtmlSyntaxAboutTwo>
        <HtmlSyntaxAboutThree>&lt;p&gt;</HtmlSyntaxAboutThree>
        <p>
          Since I was 13 years old, I have always enjoyed working at computer,
          it&apos;s not just a job for me, I really love what I do.
          <br />
          <br />
          I&apos;m 24 years old, currently working as a software developer, but
          precisely the front-end, because it&apos;s my passion to create
          layouts, whether they&apos;re web or mobile.
          <br />
          <br />I am a final year student of the Computer Engineering course at
          the Catholic University of Angola, I love engineering or rather the
          idea of engineering things and technology itself.
          <br />
          <br />
          One of my dreams is to lift many young people out of poverty, crime
          through technology, I&apos;m a big believer in the power of technology and
          the opportunities it can offer.
        </p>
        <HtmlSyntaxAboutFour>&lt;p&gt;</HtmlSyntaxAboutFour>
      </Content>
    </Container>
  );
};

export default MySelf;
