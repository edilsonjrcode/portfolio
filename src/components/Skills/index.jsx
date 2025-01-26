import { Title } from "../Title/index.jsx";
import * as Styled from "./style.js";
import angular from '../../assets/technologies/angular.svg'
import bootstrap from '../../assets/technologies/bootstrap.svg'
import css from '../../assets/technologies/css.svg'
import figma from '../../assets/technologies/figma.svg'
import html from '../../assets/technologies/html.svg'
import jest from '../../assets/technologies/jest.svg'
import js from '../../assets/technologies/angular.svg'
import react from '../../assets/technologies/react.svg'
import sass from '../../assets/technologies/sass.svg'
import ts from '../../assets/technologies/ts.svg'
import * as SharedStyle from "../../style/sharedStyles.js";
import { CardTech } from "../CardTech/index.jsx";

export const Skills = () => {

  return (
    <>
      <Styled.Container>
        <Styled.BoxSkills>
          <Styled.BoxTech>
          <CardTech image={html} text="HTML"/>
          <CardTech image={css} text="CSS"/>
          <CardTech image={js} text="JAVASCRIPT"/>
          <CardTech image={ts} text="TYPESCRIPT"/>
          <CardTech image={bootstrap} text="BOOTSTRAP"/>
          <CardTech image={sass} text="SASS"/>
          <CardTech image={react} text="REACT"/>
          <CardTech image={angular} text="ANGULAR"/>
          <CardTech image={jest} text="JEST"/>
          <CardTech image={figma} text="FIGMA"/>
          </Styled.BoxTech>

        <Styled.BoxTexts>
            <Title text="Skills." align="left" margin="1.75rem"/>
            <SharedStyle.ParagrathSections align="left" widthrectangle="27.25rem">Olá, meu nome é Edilson Júnior, sou Desenvolvedor Frontend com 2 anos de experiência. Moro em João Pessoa - PB, e sou apaixonado por criar interfaces modernas, intuitivas e acessíveis. Minha jornada como desenvolvedor começou com um forte interesse em transformar ideias em experiências digitais cativantes.
            <br/><br/>Nos últimos dois anos, trabalhei com diversas tecnologias e sempre me desafiei a aprender novas ferramentas para contribuir na entrega de soluções inovadoras.</SharedStyle.ParagrathSections>
            <br/>
            <SharedStyle.Rectangle widthrectangle="10.25rem" heigthrectangle="0.6875rem" color="black"/>
          </Styled.BoxTexts>
        </Styled.BoxSkills>
      </Styled.Container>
    </>
  );
};
