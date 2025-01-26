import { css } from "styled-components";

export const BoxFlex = (flex, flexdirection, justifycontent, alignitems) => css`
    display: ${flex};
    flex-direction: ${flexdirection};
    justify-content: ${justifycontent};
    align-items: ${alignitems};
`