import { useQuery, gql } from "@apollo/client";

const GET_BOOK = gql`
  query  GETBOOK($id: ID!){
      book (id: $id) {
        name
        genre
      }
  }
`
const useBook = (id) =>{
   const {error, data, loading} = useQuery(GET_BOOK,{
     variables:{
      id
     }
   });
   return {
     error,
     data,
     loading
   };
};

export default  useBook;

