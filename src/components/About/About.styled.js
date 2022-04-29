import styled from 'styled-components';

export const AboutSection = styled.div`
    padding: 3.5em 2em;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 3em;

    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
`;

export const AboutTitle = styled.h1`
    margin-bottom: 0.25em;
    grid-area: title;

    span {
        font-weight: 900;
    }
`;

export const AboutSubTitle = styled.h3`
    background: #d7f6f6;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    font-family: sans-serif;
    margin-bottom: 1em;

    grid-column: 1 / -1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 4em);
`;

export const ProfileImg = styled.div`
    grid-area: img;
    position: relative;
    z-index: 2;
    width: 100%;

    img {
        border-radius: 4px;
    }

`;

export const SocialList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 1em 0 0;
    padding: 0;

    li {
        text-decoration: none;
        padding: 0.5em;

        a {
            font-size: 2.5rem;
            cursor: pointer;
            color: grey;
            opacity: 1;
            transition-duration: 0.2s; 
        }

        &:hover:nth-child(1) {
            a {
                color: #0077b5; 
            }
        }
        &:hover:nth-child(2) {
            a {
                color: #00405d;
            }
        }
        &:hover:nth-child(3) {
            a {    
                color: #55acee;
            }
        }
    }


`;

