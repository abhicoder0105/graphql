import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BookList from "./components/BookList";
import Book from "./components/Book"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <h1>Reading List</h1>
        
      <BrowserRouter>
      
      <Routes>
      <Route   path="/" element={<BookList />}  />
      <Route   path="/:id" element={<Book />}  />


      </Routes>
      </BrowserRouter>
       
      </div>
    </ApolloProvider>
  );
}

export default App;
