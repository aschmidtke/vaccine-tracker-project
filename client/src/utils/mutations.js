import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $dateOfBirth: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            dateOfBirth: $dateOfBirth
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_VAX = gql`
    mutation addVax($type: String! $date: String!) {
        addVax(type: $type date: $date) {
            dosage {
                _id
                type
                date
            }

        }

    }
`;
