import React from "react";
import Lottie from "lottie-react";
import SplashAnimation from "../../assets/splash.json";

import { Container } from './styles';

const SplashScreen: React.FC = () => {
  

  return (
    <Container>
       <Lottie animationData={SplashAnimation} loop={true} />
    </Container>
  );
};

export default SplashScreen;
