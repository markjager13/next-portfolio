import styled from 'styled-components';

export const StyledFooter = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding: 1.5em 0;

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

    p, a {
        padding: 0 1em;
        display: inline-block;
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.primary1};
    }
    
    a {
        cursor: pointer;

        &:focus {
            outline: 3px solid ${(props) => props.theme.colors.primary1};
            outline-offset: 3px;
        }
    }
`;



