import styled from "styled-components";
import { theme } from "./theme";

export const Rectangle = styled.div`
    width: ${(props) => props.widthrectangle};
    height: ${(props) => props.heigthrectangle};
    background: ${(props) => props.color == 'red'? theme.colors.red : theme.colors.black};
    margin-right: ${(props) => props.marginright};
`

export const ParagrathSections = styled.p`
    width: ${(props) => props.widthrectangle};
    text-align: ${(props) => props.align};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.5rem; 
`