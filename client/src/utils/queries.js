import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($email: String!){
        user(email: $email) {
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