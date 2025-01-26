import * as Styled from "./style.js";
import * as SharedStyle from "../../style/sharedStyles.js";
import photoJr from '../../assets/photoJr.png'
import githubIcon from '../../assets/socialMedia/githubIcon.svg'
import googleIcon from '../../assets/socialMedia/googleIcon.svg'
import instagramIcon from '../../assets/socialMedia/instagramIcon.svg'
import linkedinIcon from '../../assets/socialMedia/linkedinIcon.svg'
import { Button } from "../Button/index.jsx";
import { Title } from "../Title/index.jsx";

export const Principal = () => {

  return (
    <>
      <Styled.Container>
        <Styled.BoxPrincipal>
          <Styled.Information>

            <Styled.BoxTitle>
              <Styled.BoxHello>
                <Styled.RectangleHorizontal widthrectangle="5.5625rem" heigthrectangle="0.6875rem" color="red" marginright="1rem"/>
                <p>Olá, me chamo Edilson Júnior</p>
              </Styled.BoxHello>
              <Title text="Frontend Developer" margin="4rem"/>
            </Styled.BoxTitle>

            <Styled.BoxApresentation>
              <Styled.RectangleVertical widthrectangle="1.34544rem;" heigthrectangle="11.3rem" color="red" marginright="1rem"/>
              <Styled.BoxViewPortfolio>
                <Styled.SocialMedia>
                  <img src={linkedinIcon} alt="Icone Linkedin"/>
                  <img src={instagramIcon} alt="Icone Instagram"/>
                  <img src={githubIcon} alt="Icone Github"/>
                  <img src={googleIcon} alt="Icone Google"/>
                </Styled.SocialMedia>
                <Styled.Paragraph>Sou um desenvolvedor frontend apaixonado por criar interfaces dinâmicas e experiências web incríveis. Abaixo você encontrará alguns dos projetos que refletem meu trabalho, meu aprendizado e minha dedicação.
                Vamos explorar juntos?</Styled.Paragraph>
                <Button text="Ver Portfólio"/>
              </Styled.BoxViewPortfolio>
            </Styled.BoxApresentation>

          </Styled.Information>
          <Styled.PessoalImg src={photoJr} alt="" />
        </Styled.BoxPrincipal>
      </Styled.Container>
    </>
  );
};