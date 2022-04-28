import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;    
`;

export const Title = styled.h2`
    font-weight: 300;
    padding-left: 0.5em;

    strong {
        display: block;
    }
`;

export const ContentWrapper = styled.div`
    padding: 0 2em 2em;
    max-width: 1024px;
    margin: 1em auto;
`;

export const ContentTable = styled.table`
    display: table;
    border-collapse: separate;
    text-align: left;
    margin-bottom: 3em;
    width: 100%;

    th {
        font-weight: 900;
        padding-bottom: 15px;
    }

    td {
        width: 200px;
    }
`;

export const ExternalLink = styled.a`
    font-weight: 600;
    color: red;
    align-self: bottom;
    margin-top: auto;
    transition: border-bottom ease 250ms;

        &:hover {
            border-bottom: 2px solid black;
        }
`;
    
export const ContentText = styled.p`
    max-width: 1000px;
    margin: 1em auto;
`;
