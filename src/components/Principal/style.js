import styled from "styled-components";
import { theme } from "../../style/theme";
import { BoxFlex } from "../../style/mixins";
import { Rectangle } from "../../style/sharedStyles";

export const BoxViewPortfolio = styled.div`
    ${() => BoxFlex('flex', 'column', 'flex-start', 'flex-start')}
    @media (max-width: 1380px) {
        width: 100%;
    }
`
export const BoxApresentation = styled.div`
    ${() => BoxFlex('flex', 'row', 'flex-start', 'flex-start')}

    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
        align-items: center;
    }
`

export const BoxTitle = styled.div`
    ${() => BoxFlex('flex', 'column', 'flex-start', 'flex-start')}

    @media (max-width: 1380px) {
        padding: 5rem 0rem 0rem 0rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 0rem 0rem 0rem;
    }
`
export const BoxHello = styled.div`
    ${() => BoxFlex('flex', 'row', 'flex-start', 'center')}

    @media (max-width: 1380px) {
        ${() => BoxFlex('flex', 'row', 'flex-start', 'center')}
        align-items: center;
    }

    @media (max-width: 768px) {
        p {
            font-size: .75rem;
        }
    }
`
export const Information = styled.div`
    ${() => BoxFlex('flex', 'column', 'flex-start', 'flex-start')}
    width: 100%;

    @media (max-width: 1380px) {
        margin: 0 auto;
    }

`
export const BoxPrincipal = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-between', 'center')}
    position: relative;

    @media (max-width: 1380px) {
        ${() => BoxFlex('flex', 'column', 'space-between', 'center')}
    }
`

export const Container = styled.section`
    background-color: ${theme.colors.black};
    height: 100vh;
    width: 100%;
    padding: 0rem 6rem;
    overflow: hidden;

    @media (max-width: 1380px) {
        height: auto;
        padding: 7rem 6rem 0rem 6rem;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 7rem 2rem 0rem 2rem;
    }
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.25rem;
    width: 29.25rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        height: auto;
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        width: 80%;
    }
`

export const PessoalImg = styled.img`
    width: auto;
    height: 100vh;
    object-fit: cover;
    padding: 6rem 0rem 0rem 0rem;

    @media (max-width: 1380px) {
        height: 70rem;
        padding: 0rem;
    }

    @media (max-width: 768px) {
        height: 30rem;
        padding: 0rem;
    }
`

export const RectangleHorizontal = styled(Rectangle)`
    @media (max-width: 1380px) {
        width: 2rem;
        height: .5rem;
        margin-right: .5rem;
    }
`

export const RectangleVertical = styled(Rectangle)`
    @media (max-width: 1380px) {
        display: none;
    }
`


export const SocialMedia = styled.div`
    ${() => BoxFlex('flex', 'row', 'space-around', 'center')}
    img {
        width: 1.2rem;
        margin-right: 1rem;
        margin-bottom: .75rem;
    }

    @media (max-width: 1380px) {
        
    }
`