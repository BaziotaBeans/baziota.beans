import type { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import { Context } from "../context/AppContext";

import Sidebar from "../components/Sidebar";
import GlobalShadow from "../components/GlobalShadow";
import MenuHamburguer from "../components/MenuHamburguer";
import About from "../components/About";
import Work from "../components/Work";
import MySelf from "../components/MySelf";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import SplashScreen from "../components/SplashScreen";

import { Wrapper, Container } from "../styles/pages/Wrapper";

const Home: NextPage = () => {
  const { toggleSidebar } = useContext(Context);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
       
      <title>Beans</title>
      </Head>
    
      {!show ? (
        <SplashScreen />
      ) : (
        <Wrapper>
          <MenuHamburguer />
          <Sidebar />

          <Container>
            <About />

            <Work />

            <MySelf />

            <Skills />

            <Contact />

            <Footer />
          </Container>

          <GlobalShadow isActive={toggleSidebar} />
        </Wrapper>
      )}

    </>
  );
};

export default Home;
