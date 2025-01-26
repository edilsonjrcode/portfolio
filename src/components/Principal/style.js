import styled from "styled-components";
import { theme } from "../../style/theme";
import { BoxFlex } from "../../style/mixins";

export const BoxViewPortfolio = styled.div`
    ${() => BoxFlex('flex', 'column', 'flex-start', 'flex-start')}
`
export const BoxApresentation = styled.div`
    ${() => BoxFlex('flex', 'row', 'flex-start', 'flex-start')}
`
export const BoxHello = styled.div`
    ${() => BoxFlex('flex', 'row', 'flex-start', 'center')}
`
export const Information = styled.div`
    ${() => BoxFlex('flex', 'column', 'flex-start', 'flex-start')}
    width: 37.25rem;
`
export const BoxPrincipal = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-between', 'center')}
    position: relative;
`

export const Container = styled.section`
    background-color: ${theme.colors.black};
    height: 100vh;
    width: 100%;
    padding: 0rem 6rem;
    overflow: hidden;
`

export const Paragraph = styled.h1`
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.25rem;
    width: 29.25rem;
    margin-bottom: 1rem;
`

export const PessoalImg = styled.img`
    width: auto;
    height: 100vh;
    object-fit: cover;
    padding: 6rem 0rem 0rem 0rem;
`

export const SocialMedia = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-around', 'center')}
    img {
        width: 1.2rem;
        margin-right: 1rem;
        margin-bottom: .75rem;
    }
`