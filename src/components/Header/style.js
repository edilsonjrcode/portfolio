import styled from "styled-components";
import { theme } from "../../style/theme";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.black};
    padding: 0rem 8.75vw;
    height: 6.5rem;
`
export const Nav = styled.nav`
    display: flex;
    color: ${theme.colors.white};
    line-height: 6.5rem;

    a {
        color: ${theme.colors.white};
        margin-right: 2.56rem;
        
        &:last-child {
            margin-right: 0rem;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const ResponsiveNav = styled.nav`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100vh;
    background: ${theme.colors.black};
    padding: 4rem 0rem;

    a {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: ${theme.colors.white};
        margin-bottom: 3rem;
        
        &:last-child {
            margin-right: 0rem;
        }

    }

    @media (max-width: 768px) {
        display: block;
    }
`

export const ResponsiveMenu = styled.img`
    width: 1.46094rem;
    height: 1.1875rem;
    flex-shrink: 0;
    margin-top: 2.5rem;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`