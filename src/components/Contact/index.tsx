import React from "react";

import { Button } from "../Button";

import { MAP_INFO } from "../../utils";

import {
  Container,
  Content,
  Heading,
  HtmlSyntaxAboutOne,
  HtmlSyntaxAboutTwo,
  HtmlSyntaxAboutThree,
  HtmlSyntaxAboutFour,
  HtmlSyntaxAboutFive,
  HtmlSyntaxAboutSix,
  LeftContent,
  RightContent,
  Form,
  Row,
  InputGroup,
  Input,
  TextArea,
  MapContent,
  MapContentView,
  MapContentInfo,
  MapWrapper,
  LocationWrapper,
  Text,
  TransitionContactHeading
} from "./styles";

const Contact: React.FC<any> = ({ ref }) => {
  return (
    <Container id="contact" ref={ref}>
      <Content>
        <LeftContent>
          <HtmlSyntaxAboutOne>&lt;h2&gt;</HtmlSyntaxAboutOne>
          <Heading>Contact me</Heading>
          <HtmlSyntaxAboutTwo>&lt;h2&gt;</HtmlSyntaxAboutTwo>

          <HtmlSyntaxAboutThree>&lt;p&gt;</HtmlSyntaxAboutThree>
          <Text>
            I&apos;m interested in freelance opportunities - especially
            ambitious <br /> or small projects. However, if you have other
            request or <br />
            question, don&apos;t hesitate to use the form.
          </Text>
          <HtmlSyntaxAboutFour>&lt;/p&gt;</HtmlSyntaxAboutFour>

          <HtmlSyntaxAboutFive>&lt;form&gt;</HtmlSyntaxAboutFive>

          <Form>
            <Row>
              <InputGroup>
                <Input placeholder="Name" />
              </InputGroup>
              <InputGroup>
                <Input placeholder="E-mail" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Input placeholder="Subject" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <TextArea placeholder="Message" />
              </InputGroup>
            </Row>

            <Button className="btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Contact me!
            </Button>
          </Form>

          <HtmlSyntaxAboutSix>&lt;/form&gt;</HtmlSyntaxAboutSix>
        </LeftContent>

        <RightContent>
          <MapWrapper>
            <LocationWrapper>
              <div className="pin">
                <img src="/Beans Avatar.jpg" alt="" />
              </div>
              <h2 className="text">&ldquo; See my location &rdquo;</h2>
            </LocationWrapper>
            <MapContent>
              <MapContentView>
                <iframe
                  src={MAP_INFO.url}
                  width={MAP_INFO.width}
                  height={MAP_INFO.height}
                  style={MAP_INFO.style}
                  referrerPolicy="no-referrer-when-downgrade"
                  loading="lazy"
                ></iframe>
              </MapContentView>

              <MapContentInfo>
                <h3>Angola, Luanda</h3>
                <p>Rangel, Coca Cola, CTT, House Number 47.</p>

                <Button className="btn-small">
                  <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                  </svg>
                  See Here!
                </Button>
              </MapContentInfo>
            </MapContent>
          </MapWrapper>
        </RightContent>

        <TransitionContactHeading>CONTACT</TransitionContactHeading>
      </Content>
    </Container>
  );
};

export default Contact;
