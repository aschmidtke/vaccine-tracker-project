import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EntryPage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fbfbfb
`;

export const PageHeader = styled(Link)`
    font-size: 5rem;
    front-weight: 700;
    margin: 40px 0;
    color: inherit;
`;