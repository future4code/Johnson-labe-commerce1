import React from "react";
import {CardContainer, CardInfo, AddToCartButton} from "./ProdutosStyled";



export class  ProductCard extends React.Component {
  render(){
  return (
    <>
      <CardContainer>
        <img src={this.props.imagemProduto}/>
        <CardInfo>
          <p>{this.props.nomeProduto}</p>
          <p>{this.props.precoProduto}</p>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>

    </>
  );
  }
};

export default ProductCard;
