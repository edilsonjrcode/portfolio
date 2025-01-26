import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 7rem;
    width: 45rem;
    margin-bottom: ${(props) => props.margin};
    text-align: ${(props) => props.align};

    @media (max-width: 768px) {
        font-size: 4rem;
        width: 18rem;
        line-height: 4rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 320px) {
        font-size: 3.125rem;
        line-height: 3.125rem;
    }
`