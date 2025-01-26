import { Title } from "../Title/index.jsx";
import * as Styled from "./style.js";
import * as SharedStyle from "../../style/sharedStyles.js";

export const Portfolio = () => {

  return (
    <>
      <Styled.Container>
        <Styled.BoxAbout>
          <Styled.BoxTexts>
            <Title text="Portfolio" align="center" margin="1.75rem"/>
            <Styled.ParagrathPortofolio align="center" widthrectangle="36.1875rem">Desde 2024, trabalho como desenvolvedor frontend buscando transformar desafios técnicos em soluções inteligentes e intuitivas.</Styled.ParagrathPortofolio>
            <br/>
            <SharedStyle.Rectangle widthrectangle="10.25rem" heigthrectangle="0.6875rem" color="red"/>
          </Styled.BoxTexts>
        </Styled.BoxAbout>
      </Styled.Container>
    </>
  );
};
