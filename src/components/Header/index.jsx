import { useState } from "react";
import * as Styled from "./style.js";
import closeMenu from "../../assets/closeMenu.svg";
import menuHamburguer from "../../assets/menuHamburguer.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Styled.Header>
        <img src="/logo.svg" alt="" width={100} />
        <Styled.Nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Skills</a>
          <a href="">Portfolio</a>
          <a href="">Contatos</a>
          {isOpen ? (
            <Styled.ResponsiveMenu
              src={closeMenu}
              alt=""
              onClick={() => {
                setIsOpen(false);
                console.log("Está fechado: " + isOpen);
              }}
            />
          ) : (
            <Styled.ResponsiveMenu
              src={menuHamburguer}
              alt=""
              onClick={() => {
                setIsOpen(true);
                console.log("Está aberto: " + isOpen);
              }}
            />
          )}
        </Styled.Nav>
      </Styled.Header>
      {isOpen ? (
        <Styled.ResponsiveNav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Skills</a>
          <a href="">Portfolio</a>
          <a href="">Contatos</a>
        </Styled.ResponsiveNav>
      ) : (
        ""
      )}
    </>
  );
};
