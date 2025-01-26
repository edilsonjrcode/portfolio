import * as Styled from "./style.js";

export const Button = ({text}) => {

  return (
    <>
      <Styled.Button>
        <span>{text}</span>
      </Styled.Button>
    </>
  );
};