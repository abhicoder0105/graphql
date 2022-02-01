const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = require("graphql");

//dummy data object

var books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "The final empire", genre: "Fantasy", id: "2",  authorId: "2"  },
  { name: "The long earth", genre: "Sci-fi", id: "3" ,  authorId: "3" },
  {name: "heroes of ages", genre: "Scir-gi", id: "4", authorId: "2"},
  {name: "shiv mahapuran", genre: "Fantasy", id: "5", authorId: "3"},
  {name: "Test ", genre: "Fiction", id: "6", authorId: "1"}

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
    author: {
      type: AuthorType,
      resolve(parent, args){
        console.log("parent",parent);
        console.log("args", args);
        return _.find(authors, {id: parent.authorId })
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        console.log("parent",parent);
        console.log("args", args);
        return _.filter(books, {authorId: parent.id })
        // return books.filter(book => book.authorId == parent.id)
      }
    }
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
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  },  
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
