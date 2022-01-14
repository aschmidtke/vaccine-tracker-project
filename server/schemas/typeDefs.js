const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Dosage {
        _id: ID
        userId: String
        name: String
        date: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        dateOfBirth: String
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
        addUser(firstName: String!, lastName: String!, email: String!, password: String! dateOfBirth: String!): Auth
        addVax(name: String, date: String): User
        updateUser(firstName: String, lastName: String, email: String, password: String, dateOfBirth: String): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;