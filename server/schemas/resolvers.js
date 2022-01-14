const { AuthenticationError } = require('apollo-server-express');
const { User, Dosage } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    // user query needs to be looked over
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('dosage');
                return user
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user}
        },
        addVax: async (parent, args, context) => {
            console.log(context);
            if (context.user) {
                // args.date = new Date(args.date)
                const user = await User.findByIdAndUpdate(context.user._id, { $push: { dosage: args }});

                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true});
            }
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;