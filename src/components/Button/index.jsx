import * as Styled from "./style.js";

export const Button = ({text, onClick}) => {

  return (
    <>
      <Styled.Button onClick={onClick}>
        <span>{text}</span>
      </Styled.Button>
    </>
  );
};