import React from "react";
import { FaHeart, FaGithub } from "react-icons/fa";

import {
  Container,
  HtmlSyntaxAboutOne,
  HtmlSyntaxAboutTwo,
  HeadingAuthorWrapper,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <HtmlSyntaxAboutOne>&lt;/body&gt;</HtmlSyntaxAboutOne>
      <HtmlSyntaxAboutTwo>&lt;/html&gt;</HtmlSyntaxAboutTwo>

      <HeadingAuthorWrapper>
        <p>
          Made with my{" "}
          <span>
            <FaHeart color="#000" size={15} />
          </span>{" "}
          by Beans
          <a href="#">
            <FaGithub color="#000" size={18} />
          </a>{" "}
        </p>
      </HeadingAuthorWrapper>
    </Container>
  );
};

export default Footer;
