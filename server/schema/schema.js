const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

//dummy data object

var books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1" },
  { name: "The final empire", genre: "Fantasy", id: "2" },
  { name: "The long earth", genre: "Sci-fi", id: "3" },
];

const authors = [
  { name: "Abhishek Sharma", age: 29, id: "1" },
  { name: "Anirudh Sharma", age: 32, id: "2" },
  { name: "Rachna Sharma", age: 28, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code we need from db/ other sources
        return _.find(books, { id: args.id });
      },
    },
    author: {
    type: AuthorType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return _.find(authors, { id: args.id });
    }
  }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
