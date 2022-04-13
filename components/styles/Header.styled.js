import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    padding: 1em 0;
    margin: 0 auto;
`;

export const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 400px;
`;

export const NavLinks = styled.ul`
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled.a`
    position: relative;
    margin-left: 2em;
    margin-bottom: 0;
    font-size: 1.25rem;
    color: #303030;
    cursor: pointer;

    &:before {
        position: absolute;
        content: '';
        display: block;
        height: 3px;
        background: black;
        bottom: -0.25em;
        left: 0;
        right: 0;
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
    }

    &:hover:before {
        transform: scale(1, 1);
    }
`;