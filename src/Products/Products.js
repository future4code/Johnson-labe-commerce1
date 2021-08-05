import React from "react";
import  ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductsContainer = styled.div``;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 2vh 2vh;

`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: 6</p>
        <label>
          Ordenação:
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        <ProductCard />

      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;
