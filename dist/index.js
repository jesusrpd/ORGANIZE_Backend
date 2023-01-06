"use strict";

var _apolloServer = require("apollo-server");
let users = [{
  username: "Rodrigo",
  phone: "4356455634",
  city: "Ciudad de México"
}, {
  username: "Jesús",
  phone: "413534534",
  city: "Monterrey"
}];
const typeDefs = (0, _apolloServer.gql)`
    type User {
        username: String!
        phone: String!
        city: String!
    }

    type Query{
        userCount: Int!
        allUsers: [User!]!
        findUser(username: String!): User
    }
`;
const resolvers = {
  Query: {
    userCount: () => users.length,
    allUsers: () => users,
    findUser: (root, args) => users.find(p => p.name === args.name)
  }
};
const server = new _apolloServer.ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({
  url
}) => {
  console.log(`Server ready at ${url}`);
});