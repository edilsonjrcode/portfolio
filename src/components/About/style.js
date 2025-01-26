import styled from "styled-components";
import { theme } from "../../style/theme";
import { BoxFlex } from "../../style/mixins";
import { ParagrathSections } from "../../style/sharedStyles";

export const BoxAbout = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-between', 'center')}
    position: relative;

    @media (max-width: 1380px) {
        ${() => BoxFlex('flex', 'column-reverse', 'space-between', 'center')}
        width: 100%;
    }

`
export const BoxTexts = styled.div`
    ${() => BoxFlex('flex', 'column', 'space-between', 'flex-end')}
    position: absolute;
    right: 0;

    @media (max-width: 1380px) {
        ${() => BoxFlex('flex', 'column', 'flex-end', 'flex-end')}
        position: relative;
        width: 100%;
    }
`

export const Container = styled.section`
    background-color: ${theme.colors.black};
    height: 100vh;
    width: 100%;
    padding: 0rem 4.75rem 0rem 2.25rem;
    overflow: hidden;

    @media (max-width: 1380px) {
        height: auto;
        padding: 7rem 6rem 0rem 6rem;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 5rem 2rem 0rem 2rem;
    }
`

export const PessoalImg = styled.img`
    width: auto;
    height: 100vh;
    object-fit: cover;
    padding: 6rem 0rem 0rem 0rem;

    @media (max-width: 1380px) {
        height: 50rem;
        padding: 0rem;
    }

    @media (max-width: 768px) {
        height: 30rem;
        padding: 0rem;
    }
`

export const ParagrathAbout = styled(ParagrathSections)`
    @media (max-width: 1380px) {
        width: 100%;
    }
`