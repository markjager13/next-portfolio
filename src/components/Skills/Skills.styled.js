import styled from 'styled-components';

export const SkillsList = styled.ul`
    margin: 1em;
    display: grid;

    li {
        margin: 0.75em;
        list-style: circle;
        font-weight: 600;
    }

    @media (min-width: 440px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 840px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;