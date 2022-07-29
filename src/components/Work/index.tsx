import React from "react";
import Link from "next/link";

import { Button } from "../../components/Button";

import {
  Container,
  Heading,
  Content,
  HtmlSyntaxAboutOne,
  HtmlSyntaxAboutTwo,
  HtmlSyntaxAboutThree,
  HtmlSyntaxAboutFour,
  WrapperContent,
  TransitionWorkHeading,
  SectionGalleryWorkWrapper,
  SectionGalleryWork,
  SectionGalleryWorkItem,
  HtmlSyntaxAboutFive,
  HtmlSyntaxAboutSix,
  BlockContent,
} from "./styles";

const Work: React.FC<any> = ({ ref }) => {
  return (
    <Container id="work" ref={ref}>
      <WrapperContent>
        <Content>
          <HtmlSyntaxAboutOne>&lt;h2&gt;</HtmlSyntaxAboutOne>
          <Heading>My Portfolio</Heading>
          <HtmlSyntaxAboutTwo>&lt;/h2&gt;</HtmlSyntaxAboutTwo>

          <HtmlSyntaxAboutThree>&lt;p&gt;</HtmlSyntaxAboutThree>
          <div>
            <p>
              A small gallery of recent projects chosen by me.
              <br />
              I&apos;ve done them all together with amazing people from
              companies around <br />
              the globe. I&apos;ts only a drop in the ocean compared to the
              entire list.
              <br />
              Interested to see some more? Visit <Link href="/work">
                my work
              </Link>{" "}
              page.
            </p>
          </div>
          <HtmlSyntaxAboutFour>&lt;/p&gt;</HtmlSyntaxAboutFour>
        </Content>

        <BlockContent>
          <Button className="btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            See more!
          </Button>
        </BlockContent>

        <TransitionWorkHeading>Work</TransitionWorkHeading>
      </WrapperContent>

      <SectionGalleryWorkWrapper>
        <HtmlSyntaxAboutFive>&lt;section&gt;</HtmlSyntaxAboutFive>
        <SectionGalleryWork>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
          <SectionGalleryWorkItem></SectionGalleryWorkItem>
        </SectionGalleryWork>
        <HtmlSyntaxAboutSix>&lt;/section&gt;</HtmlSyntaxAboutSix>
      </SectionGalleryWorkWrapper>
    </Container>
  );
};

export default Work;
