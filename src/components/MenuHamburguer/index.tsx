import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../context/AppContext";

import { Container } from "./styles";

const MenuHamburguer: React.FC = () => {
  const { toggleSidebar, handleToggleSidebar } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  console.log(isVisible);

  return (
    <Container
      className={`menu-container ${toggleSidebar ? "on" : ""}`}
      onClick={handleToggleSidebar}
      style={{ opacity: isVisible || toggleSidebar ? "1" : "0" }}
    >
      <div className="menu-toggle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </Container>
  );
};

export default MenuHamburguer;
