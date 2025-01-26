import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 7rem;
    width: 45rem;
    margin-bottom: ${(props) => props.margin};
    text-align: ${(props) => props.align};
`