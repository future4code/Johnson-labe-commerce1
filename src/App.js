import React from "react";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import ProductCard from "./Products/ProductCard";
import { FilterContainer, InputFilter,InputSearch } from "./Filters/FilterStyled";

const ProductsContainer = styled.div``;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  gap: 8px;
`;

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

export class App extends React.Component {
  state ={
    produtos : [
      {
        imagem: 'https://cdn.awsli.com.br/1000x1000/284/284081/produto/65362859/4db23e54fe.jpg',
        nome: 'Camiseta',
        preco: 2000
    },
    {
      imagem: 'https://www.dhresource.com/0x0/f2/albu/g10/M01/A5/E3/rBVaVl6cD4aAKHIiAACs44b_6Tc906.jpg',
      nome: 'Calça',
      preco: 1500
  },
  ],
  inputValorMin : '',
  inputValorMax : '',
  inputNomeProduto : ''
}

  OnChangeValorMin = (event) => {
    this.setState({inputValorMin: event.target.value})
  }

  OnChangeValorMax = (event) => {
    this.setState({inputValorMax: event.target.value})
  }

  OnChangeNomeProduto = (event) => {
    this.setState({inputNomeProduto: event.target.value})
  }

  render() {

    const produtosFiltrados = this.state.produtos.filter(produto =>{

      if(this.state.inputNomeProduto === '' && this.state.inputValorMax === '' && this.state.inputValorMin === ''){
        return produto
      }else if(this.state.inputNomeProduto === produto.nome){
        return produto
      }
    })

    return (
      <AppContainer>

          <FilterContainer>
            <h3>Filtros</h3>
          <InputFilter>
              <input placeholder="Valor mínimo" type="number" value={this.state.inputValorMin} onChange={this.OnChangeValorMin}></input>
          </InputFilter>
          <InputFilter>
              <input placeholder="Valor máximo" type="number" value={this.state.inputValorMax} onChange={this.OnChangeValorMax}></input>
          </InputFilter>
              <h3>Busca</h3>
          <InputFilter>
            <InputSearch type="Text" placeholder="Produto" value={this.state.inputNomeProduto} onChange={this.OnChangeNomeProduto}/>
          </InputFilter>
        </FilterContainer>

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
      {produtosFiltrados.map(produto => {
            return (
              <ProductCard imagemProduto={produto.imagem} nomeProduto={produto.nome} precoProduto={produto.preco} />
      )})}
      </ProductsGrid>
    </ProductsContainer>
        <Cart />
      </AppContainer>
    );
  }
}

export default App;
