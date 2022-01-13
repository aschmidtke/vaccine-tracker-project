const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Dosage {
        _id: ID
        name: String
        date: Int
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        dateOfBirth: Int
        dosage: [Dosage]
    }
    
    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String! dateOfBirth: Int!): Auth
        addVax(dosage: [ID]!): Dosage
        updateUser(firstName: String, lastName: String, email: String, password: String, dateOfBirth: Int): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;