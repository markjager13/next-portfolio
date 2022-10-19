import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fadeIn ease 1.25s;
    animation-delay: 300ms;
    animation-fill-mode: forwards;


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
    
    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromBottom ease 1.25s;
    animation-delay: 100ms;
    animation-fill-mode: forwards;

    span {
        font-weight: 900;
    }

    @keyframes fromBottom {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media ${(props) => props.theme.breakpoints.md} {
        text-align: left;
        padding-left: 0.5em;
    }
`;

export const ContentWrapper = styled.div`
    padding: 0 1em;
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
    color: ${props => props.theme.colors.accent2};
    align-self: bottom;
    margin-top: auto;
    transition: border-bottom ease 250ms;

        &:hover {
            border-bottom: 2px solid ${props => props.theme.colors.accent2};
        }
`;

export const ImageContainer = styled.div`
    border: 1px solid ${props => props.theme.colors.accent3};
    border-radius: 4px;
    overflow: hidden;

`;

export const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    
    
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        margin: 3.5em 2em;

    }

`;

export const LeftContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 55%;   
    }
`;

export const RightContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 45%;   
    }`;

export const ContentTitle = styled.h3`
    font-weight: 600;
    margin-bottom: 0.25em;
`;
    
export const ContentText = styled.p`
    max-width: 1024px;
    margin: 3em auto;
`;
