import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;

    max-width: 1024px;
    margin: 0 auto;
`;

export const Title = styled.div`
    margin-bottom: 0.25em;
    grid-area: title;
    font-size: 2.5rem;

    span {
        font-weight: 600;
    }
`;

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