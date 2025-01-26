import styled from "styled-components";
import { theme } from "../../style/theme";
import { BoxFlex } from "../../style/mixins";

export const BoxTech = styled.div`
    ${() => BoxFlex('flex', 'row', 'flex-start', 'center')}
    position: relative;
    flex-wrap: wrap;
`

export const BoxSkills = styled.div`
    ${() => BoxFlex('flex', 'row-reverse', 'space-between', 'center')}
    position: relative;
`
export const BoxTexts = styled.div`
    ${() => BoxFlex('flex', 'column', 'space-between', 'flex-start')}
    position: absolute;
    left: 0;
`

export const Container = styled.section`
    background-color: ${theme.colors.red};
    height: 100vh;
    width: 100%;
    padding: 12rem 4.75rem 0rem 4.75rem;
    overflow: hidden;
`

export const PessoalImg = styled.img`
    width: auto;
    height: 100vh;
    object-fit: cover;
    padding: 6rem 0rem 0rem 0rem;
`