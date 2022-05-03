import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;

    @media (min-width: 48em) {
        max-width: 1024px;
        padding: 1em 0;
        margin: 0 auto;
        margin-top: 2em;

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
    }
`;

export const StyledNav = styled.nav`  
    display: grid;
    grid-template-columns: 80px 100px 1fr 80px;

    @media (min-width: 48em) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const NavToggle = styled.input`
    display: none;

    &:checked ~ ul {
        opacity: 1;
        visibility: visible;
        max-height: 330px;
    }

    &:checked ~ label span {
        background: transparent;
    }

    &:checked ~ label span:before {
        transform: rotate(-45deg);
        top: 0;
    }

    &:checked ~ label span:after {
        transform: rotate(45deg);
        top: 0;
    }
    
`;

export const NavToggleLabel = styled.label`
    padding: 38px 30px;
    cursor: pointer;
    grid-row: 1;
    grid-column: 1;

    @media (min-width: 48em) {
        display: none;
    }
`;

export const NavIcon = styled.span`
    background: #333;
    display: block;
    height: 2px;
    width: 18px;
    position: relative;
    transition: background 0.2s ease-out;

    &:before {
        top: 5px;
    }

    &:after {
        top: -5px;
    }

    &:before, &:after {
        background: #333;
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
    }

    @media (min-width: 48em) {
        display: none;
    }
`;

export const NavLinks = styled.ul`
    grid-row: 2;
    grid-column: 2;
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    transition: max-height 0.2s ease-out;

    @media (min-width: 48em) {
        opacity: 1;
        visibility: visible;
        max-height: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0.5em;
    }

`;

export const NavLink = styled.a`
    display: block;
    padding: 20px;
    color: #303030;

    &:focus {
        outline: 3px solid #303030;
        outline-offset: 3px;
    }

    &:hover {
        color: #111;
    }

    &:hover:before {
        transform: scale(1, 1);
    }

    @media (min-width: 48em) {
        position: relative;
        margin-left: 2em;
        margin-bottom: 0;
        padding: 0;
        font-size: 1.25rem;
        color: #303030;
        cursor: pointer;

        &:before {
            position: absolute;
            content: '';
            display: block;
            height: 3px;
            background: black;
            bottom: -0.05em;
            left: 0;
            right: 0;
            transform: scale(0, 1);
            transition: transform ease-in-out 250ms;
        }
    }
`;

export const ModeToggleButton = styled.button`
    grid-column: -1;
    grid-row: 1;
    border: none;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.125rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: white;
    font-size: 1.25rem;
    color: #303030;
    font-family: "Source Sans Pro", sans-serif;
    position: relative;

    &:focus {
        outline: 3px solid #303030;
        outline-offset: 3px;
    }

        /*
    @media (min-width: 48em) {
        border-radius: 45px;
        border: 1px solid grey;
        transition: all 0.3s ease;

        
        &:hover {
        border: 1px solid black;
      
            &:before {
                transform: scale(1);
                border: 3px solid black;
            }
        }

        &:before {
        transition: all 0.2s ease;
        border-radius: 45px;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        }
        
    }
    */

`;