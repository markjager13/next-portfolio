import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;
    max-width: 1024px;
    margin: 0 auto;
`;

export const Title = styled.div`
    margin-bottom: 0.25em;
    font-size: 2.5rem;
`;

export const ContactEmail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmailLink = styled.a`
    display: inline-block;
    font-weight: 600;
    color: #303030;
    padding-top: 1.5em;

    span {
        width: 115px;
        height: 30px;
        transition: border-bottom ease 250ms;

        &:hover {
            border-bottom: 2px solid black;
        }
    }
`;

export const ContactSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
            font-size: 2rem;
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

