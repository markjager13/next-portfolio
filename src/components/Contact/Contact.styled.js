import styled from 'styled-components';

export const ContactEmail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
`;

export const EmailLink = styled.a`
    display: inline-block;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary1};

    &:focus {
        outline: 3px solid ${(props) => props.theme.colors.primary1};
        outline-offset: 3px;
    }

    span {
        font-size: 1.25rem;
        width: 115px;
        height: 30px;
        transition: border-bottom ease 250ms;

        &:hover {
            border-bottom: 2px solid ${(props) => props.theme.colors.primary1};
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
            color: ${(props) => props.theme.colors.social1};
            opacity: 1;
            transition-duration: 0.2s; 

            &:focus {
                outline: 3px solid ${(props) => props.theme.colors.primary1};
                outline-offset: 3px;
           }
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

