import styled from 'styled-components';

export const SkillsList = styled.ul`
    margin: 1em;
    display: grid;

    li {
        margin: 0.75em;
        list-style: circle;
        font-weight: 600;
    }

    @media ${(props) => props.theme.breakpoints.vsm} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: repeat(4, 1fr);
    }
`;