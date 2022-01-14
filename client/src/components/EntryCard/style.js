import styled from 'styled-components';

export const StyledEntryCard = styled.div`
    width: 100%;
    max-width: 600px;
    border-radius: 5px;
    padding: 50px
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.6);
    text-align: center;
    h2 {
        font-weight: 900;
        margin-bottom: 50px;
    }
    h3 {
        font-weight: 800;
        display: inline-block;
        margin-bottom: 0.5rem;
        color: black;
    }
    span {
        display: block;
        margin-top: 40px;
        color: #888888;
        font-size: 14px;
    }
    a {
        margin-left: 4px;
        color: #2f8bf4
    }
`;