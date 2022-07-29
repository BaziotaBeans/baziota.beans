import React, { useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Context } from "../../context/AppContext";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { useClickInsideHTMLUlElement } from "../../hooks/useClickInsideHTMLUlElement";

import {
  Container,
  LogoContainer,
  GlitchtText,
  LogoText,
  LogoTextContainer,
  LogoTextWrapper,
  RoleHeading,
  Navigation,
  SocialLinkGroup,
  SocialLink,
} from "./styles";

const Sidebar: React.FC = () => {
  const { toggleSidebar, handleCloseSidebar } = useContext(Context);

  const navigationRef = useRef() as React.MutableRefObject<HTMLUListElement>;

  useClickInsideHTMLUlElement(navigationRef, handleCloseSidebar);

  const router = useRouter();

  return (
    <Container toggleSidebar={toggleSidebar}>
      <LogoContainer>
        <GlitchtText className="glitch" data-text="B">
          B
        </GlitchtText>
        <LogoTextWrapper>
          <LogoTextContainer>
            <LogoText>B</LogoText>
            <LogoText>A</LogoText>
            <LogoText>Z</LogoText>
            <LogoText>I</LogoText>
            <LogoText>O</LogoText>
            <LogoText>T</LogoText>
            <LogoText>A</LogoText>
          </LogoTextContainer>

          <LogoTextContainer>
            <LogoText>B</LogoText>
            <LogoText>E</LogoText>
            <LogoText>A</LogoText>
            <LogoText>N</LogoText>
            <LogoText>s</LogoText>
          </LogoTextContainer>
        </LogoTextWrapper>

        <RoleHeading>Software Engineer</RoleHeading>
      </LogoContainer>

      <Navigation ref={navigationRef}>
        <li>
          <Link href="/#about">
            <a data-replace="About">
              <span>About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a data-replace="Blog">
              <span>Blog</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#myself">
            <a data-replace="Myself">
              <span>Myself</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <a data-replace="My Skills">
              <span>My Skills</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#work">
            <a data-replace="Work">
              <span>Work</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a data-replace="Contact">
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </Navigation>

      <SocialLinkGroup>
        <SocialLink href="#">
          <BsDiscord />
        </SocialLink>

        <SocialLink href="#">
          <FaLinkedinIn />
        </SocialLink>

        <SocialLink href="#">
          <BsInstagram />
        </SocialLink>
      </SocialLinkGroup>
    </Container>
  );
};

export default Sidebar;
