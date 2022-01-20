//add export const QUERY_ME 1-17 TC
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($id: ID!){
        user(id: $id) {
            firstName
            lastName
            email
            dateOfBirth
            shotOne
            shotTwo
            booster
            dosage {
                type
                date
            }
        }
    }
`;


export const QUERY_ME = gql`
{
    me{
        _id
        firstName
        lastName
        email
        dateOfBirth
        shotOne
        shotTwo
        booster
        dosage{
            type
            date   
            }
    }
    
}`

