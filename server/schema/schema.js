const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () =>({
    id: {type:  GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book:{
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args) {
        //code we need from db/ other sources
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})

