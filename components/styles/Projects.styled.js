import styled from 'styled-components';

export const Section = styled.div`
    padding: 3.5em 2em;

    max-width: 1024px;
    margin: 0 auto;
`;

export const Title = styled.div`
    margin-bottom: 0.25em;
    grid-area: title;
    font-size: 2.5rem;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    grid-auto-rows: auto;
    gap: 25px;
    padding-top: 30px;
`;

export const Card = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    text-align: left;
    border: 1px solid rgb(198, 198, 198);
    border-radius: 6px;
    padding-bottom: 30px;

    a {
        padding: 0.75em 2.5em;
        margin: 2em;
        cursor: pointer;
    }
`;

export const CardImageContainer = styled.div`
    border-radius: 6px 6px 0 0;
    overflow: hidden;
`;

export const CardImage = styled.div`
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
    border-radius: 6px 6px 0 0;
    transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;

    &:hover {
        transform: scale(1.2);
        opacity: 0.75;
    }
`;

export const CardContent = styled.div`    
    line-height: 1.5;
    text-align: left;
    padding: 15px;
    background: #fff;
`;

export const CardTitle = styled.p`
    font-size: 1.25rem;
    text-align: left;
    padding-top: 0.25em;
    font-family: "Source Sans Pro";
    font-weight: 600;
`;

export const CardSubtitle = styled.p`
    font-size: 1rem;
`;