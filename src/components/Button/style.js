import styled from "styled-components";
import { theme } from "../../style/theme";

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 8.04694rem;
    height: 2.05775rem;
    flex-shrink: 0;
    border: 1px solid ${theme.colors.red};
    background: transparent;
    cursor: pointer;

    span {
        text-align: center;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
    }
`