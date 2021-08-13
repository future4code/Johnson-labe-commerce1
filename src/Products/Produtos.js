import React from "react";
import { CardContainer, CardInfo, AddToCartButton } from "./ProdutosStyled";

export class ProductCard extends React.Component {
  render() {
    return (
      <>
        <CardContainer>
          <img src={this.props.imagemProduto} alt={this.props.nomeProduto} />
          <CardInfo>
            <p>{this.props.nomeProduto}</p>
            <p>R$ {this.props.precoProduto},00</p>
            <AddToCartButton
              onClick={() => this.props.adicionaAoCarrinho(this.props.todosProdutos)}
              
            >
              Adicionar ao carrinho
            </AddToCartButton>
          </CardInfo>
        </CardContainer>
      </>
    );
  }
}

export default ProductCard;
