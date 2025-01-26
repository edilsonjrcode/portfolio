import * as Styled from "./style.js";

export const Title = ({text, align, margin}) => {

  return (
    <>
      <Styled.TitleStyle align={align} margin={margin}>{text}</Styled.TitleStyle>
    </>
  );
};