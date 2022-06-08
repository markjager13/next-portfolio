import styled from 'styled-components';

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: auto;
    gap: 30px;
    padding-top: 30px;
`;

export const Card = styled.div`
    border: 1px solid ${props => props.theme.colors.accent3};
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    a {
        text-align: center;
        font-weight: 600;
        color: ${props => props.theme.colors.primary1};
        align-self: bottom;
        margin-top: auto;
        padding: 15px;

        &:focus {
            outline: 3px solid ${props => props.theme.colors.primary1};
            outline-offset: 3px;
        }

        span {
            transition: border-bottom ease 250ms;

            &:hover {
                border-bottom: 2px solid ${props => props.theme.colors.primary1};
            }
        }
    }
`;

export const CardImageContainer = styled.div`
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    cursor: pointer;
`;

export const CardImage = styled.div`
    width: 100%;
    height: 275px;
    object-fit: cover;
    display: block;
    border-radius: 4px 4px 0 0;
    transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;

    &:hover {
        transform: scale(1.2);
        opacity: 0.75;
    }
`;

export const CardContent = styled.div`    
    line-height: 1.6;
    padding: 15px;
    background: ${props => props.theme.colors.background1};
`;

export const CardTitle = styled.p`
    font-size: 1.25rem;
    text-align: left;
    padding-top: 0.25em;
    font-family: ${props => props.theme.fonts.title};
    font-weight: 600;
    cursor: pointer;
`;

export const CardSubtitle = styled.p`
    text-align: left;
    font-size: 1.15rem;
`;
