import styled from "styled-components";
import { BoxFlex } from "../../style/mixins";

export const DivCard = styled.div`
    ${() => BoxFlex('flex', 'column', 'center', 'center')}
    flex: 0 0 25%;
    margin-bottom: 2rem;
    width: 4.92813rem;
    height: 8.44263rem;
    flex-shrink: 0;

    img {
        margin-bottom: 0.99rem;
    }

    @media (max-width: 768px) {
        ${() => BoxFlex('flex', 'column', 'center', 'center')}
        flex: 0 0 50%
    }
`

export const TextStyle = styled.h1`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.625rem;
`