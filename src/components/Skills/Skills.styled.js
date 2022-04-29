import styled from 'styled-components';

export const SkillsList = styled.ul`
    margin: 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;

    li {
        margin: 0.75em;
        list-style: circle;
        font-weight: 600;
    }
`;