import styled from "styled-components";
import { theme } from "../../style/theme";
import { BoxFlex } from "../../style/mixins";

export const BoxAbout = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-between', 'center')}
    position: relative;

`
export const BoxTexts = styled.div`
    ${() => BoxFlex('flex', 'column', 'space-between', 'flex-end')}
    position: absolute;
    right: 0;
`

export const Container = styled.section`
    background-color: ${theme.colors.black};
    height: 100vh;
    width: 100%;
    padding: 0rem 4.75rem 0rem 2.25rem;
    overflow: hidden;
`

export const PessoalImg = styled.img`
    width: auto;
    height: 100vh;
    object-fit: cover;
    padding: 6rem 0rem 0rem 0rem;
`