import * as Styled from "./style.js";

export const CardTech = ({image, text, alt}) => {

  return (
    <Styled.DivCard>
      <img src={image} alt={alt}/>
      <Styled.TextStyle>{text}</Styled.TextStyle>
    </Styled.DivCard>
  );
};