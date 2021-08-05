import React from "react";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import ProductCard from "./Products/ProductCard";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  gap: 8px;
`;

export class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Filters />
        <Products/>
        <Cart />
      </AppContainer>
    );
  }
}

export default App;
