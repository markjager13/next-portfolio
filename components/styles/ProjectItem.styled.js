import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;

    max-width: 1024px;
    margin: 0 auto;

    position: relative;

    @media (min-width: 600px) {
        display: grid;
        width: min-content;
        margin: 0 auto;
        grid-column-gap: 1em;
        grid-template-areas:
          "img title"
          "img subtitle";
        grid-template-columns: min-content max-content;
    }

`;

export const Title = styled.h1`
    margin-bottom: 0.25em;
    font-weight: 300;

    strong {
        display: block;
    }

`;

export const SubTitle = styled.p`
    margin: 0;
    font-size: 1.25rem;

    background: #d7f6f6;
    padding: 0.25em 1em;
    font-family: sans-serif;
    margin-bottom: 1em;

    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
`;

export const TitleImage = styled.div`
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
`;

export const ProjectLinkWrapper = styled.div`
    text-align: center;
    padding-bottom: 26px;

    a {
        padding: 0 1em;
        display: inline-block;
        color: #303030;
        font-size: 1.5rem;
        text-decoration: none;
    }

`;

export const NextLink = styled.a`
  margin-left: 1em;
`;

export const PrevLink = styled.a`
  margin-right: 1em;
`;
