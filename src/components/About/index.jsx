import { Title } from "../Title/index.jsx";
import * as Styled from "./style.js";
import imageJrAbout from '../../assets/photoJrAbout.png'
import * as SharedStyle from "../../style/sharedStyles.js";

export const About = () => {

  return (
    <>
      <Styled.Container>
        <Styled.BoxAbout>
          <Styled.PessoalImg src={imageJrAbout} alt="Foto Edilson Junior" />
          <Styled.BoxTexts>
            <Title text="Sobre" align="right" margin="1.75rem"/>
            <Styled.ParagrathAbout align="right" widthrectangle="36.1875rem">Olá, meu nome é Edilson Júnior, sou Desenvolvedor Frontend com 2 anos de experiência. Moro em João Pessoa - PB, e sou apaixonado por criar interfaces modernas, intuitivas e acessíveis. Minha jornada como desenvolvedor começou com um forte interesse em transformar ideias em experiências digitais cativantes.
            <br/><br/>Nos últimos dois anos, trabalhei com diversas tecnologias e sempre me desafiei a aprender novas ferramentas para contribuir na entrega de soluções inovadoras.</Styled.ParagrathAbout>
            <br/>
            <SharedStyle.Rectangle widthrectangle="10.25rem" heigthrectangle="0.6875rem" color="red"/>
          </Styled.BoxTexts>
        </Styled.BoxAbout>
      </Styled.Container>
    </>
  );
};
