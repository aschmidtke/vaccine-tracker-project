import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(
      $email: String!,
      $password: String!
    ) {
        login(
            email: $email,
            password: $password) {
      token
      user {
        email
        firstName
        lastName
        dateOfBirth
        shotOne
        shotTwo
        booster
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
        $shotOne: String!
        $shotTwo: String!
        $booster: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            dateOfBirth: $dateOfBirth
            shotOne: $shotOne
            shotTwo: $shotTwo
            booster: $booster
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_VAX = gql`
    mutation addVax($type: String! $date: Integer!) {
        addVax(type: $type date: $date) {
            dosage {
                _id
                type
                date
            }

        }

    }
`;

export const UPDATE_USER = gql`
    mutation updateUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $dateOfBirth: String!
        $shotOne: String!
        $shotTwo: String!
        $booster: String!
    ) {
        updateUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            dateOfBirth: $dateOfBirth
            shotOne: $shotOne
            shotTwo: $shotTwo
            booster: $booster
        ) {
            token
            user {
                _id
            }
        }
    }
`;

