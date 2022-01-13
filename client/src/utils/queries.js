import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            firstName
            lastName
            email
            dateOfBirth
            dosage {
                type
                date
            }
        }
    }
`;