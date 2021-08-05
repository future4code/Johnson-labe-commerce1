import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  background-color: #d4d4d4;
  width: 100%;
  height: 35vh;

  img{
      height: 200px;
      background-color: #c4c4c4;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`;

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`;

const ProductCard = (props) => {
  return (
    <>
      <CardContainer>
        <img src={props.imagemProduto}/>
        <CardInfo>
          <p>{props.nomeProduto}</p>
          <p>{props.precoProduto}</p>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>

    </>
  );
};

export default ProductCard;
