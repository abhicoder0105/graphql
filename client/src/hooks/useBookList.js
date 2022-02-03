import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
      books {
        id
        name
        genre
      }
  }
`
export const useBookList = () =>{
   const {error, data, loading} = useQuery(GET_BOOKS);
   return {
     error,
     data,
     loading
   };
};

