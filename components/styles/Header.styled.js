import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;

    @media (min-width: 48em) {
        max-width: 1000px;
        padding: 1em 0;
        margin: 0 auto;
    }
`;

export const StyledNav = styled.nav`  

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
        max-height: 240px;
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
    padding: 28px 20px;
    position: relative;
    cursor: pointer;
    display: inline-block;

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