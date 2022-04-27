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

export const EmailLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
padding: 2em;
    font-weight: 600;
    color: #303030;

    span {
        transition: border-bottom ease 250ms;

        &:hover {
            border-bottom: 2px solid black;
        }
    }
`;