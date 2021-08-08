import React from "react";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import ProductCard from "./Products/Produtos";
import Filtros from "./Filters/Filtros";
import {
  SecaoConteudoGeral,
  ConteudoApp,
  HeaderQtdOrdProdutos,
  GridComProdutos,
} from "./AppStyled";

const ProductsContainer = styled.div``;

const arrayProdutos = [
  {
    imagem:
      "https://images.tcdn.com.br/img/img_prod/688929/boneco_senhor_cabeca_de_batata_buzz_lightyear_toy_story_brinquedo_hasbro_33408129_2_20200607181238.jpg",
    nome: "Boneco Articulado Batata Lightyear",
    preco: 100,
  },
  {
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMOkofYDTbuHDfmXjGtVkP39KHN7guwjOUEjRFOBJeDuRTOAo8rXcPotkNdWeP9ldC7qSuIY&usqp=CAc",
    nome: "Boneco Buzz Lightyer baby",
    preco: 70,
  },
  {
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_798428-MLB31123679011_062019-O.jpg",
    nome: "Boneco Zorg",
    preco: 90,
  },
  {
    imagem: "https://cf.shopee.com.br/file/667c76c4d7bbe72d1745fd1935d79f08",
    nome: "Zorg vs Buzz - salve o ET",
    preco: 130,
  },
  {
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_731462-MLB42825854896_072020-O.jpg",
    nome: "Alien",
    preco: 50,
  },
  {
    imagem: "https://m.media-amazon.com/images/I/81Zi+nq0jYL._AC_SL1500_.jpg",
    nome: "Buzz Lightyear com Navinha",
    preco: 150,
  },
];

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
  state = {
    produtos: arrayProdutos,
    inputValorMin: "",
    inputValorMax: "",
    inputNomeProduto: "",
    caroBarato: "",
  };


  // OnChangeValorMin = (event) => {
  //   const valorProduto = event.target.value;
  //   const filtroValores = arrayProdutos.filter(
  //     (valor) => valor.preco >= valorProduto  && valorProduto <= this.state.inputValorMax
  //   );

  //   this.setState({
  //     inputValorMin: valorProduto,
  //     produtos: valorProduto < 0 ? filtroValores : arrayProdutos,
  //   });
  // };

  onChangeRangeValor = (event) => {
    const valorProduto = event.target.value;
    const filtroValores = arrayProdutos.filter(
      (valor) => valor.preco <= valorProduto && valor.preco >= this.state.inputValorMin
    );
    this.setState({
      inputValorMax: valorProduto,
      produtos: valorProduto > 0 ? filtroValores : arrayProdutos,
    });
  };

  
  onChangeCaroBarato = (event) => {
    this.setState({ caroBarato: event.target.value });
  };

  OnChangeNomeProduto = (event) => {
    const nomeProduto = event.target.value;
    // debugger
    const produtosFiltrados = arrayProdutos.filter((produto) =>
      produto.nome.toLocaleLowerCase().includes(nomeProduto.toLocaleLowerCase())
    );
    this.setState({
      inputNomeProduto: nomeProduto,
      produtos: produtosFiltrados,
    });

  };

  ordenaCrescente() {
    this.state.produtos.sort((a, b) => {
      if (a.preco > b.preco) {
        return 1;
      }
      if (a.preco < b.preco) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  ordenaDecrescente() {
    this.state.produtos.sort((a, b) => {
      if (a.preco < b.preco) {
        return 1;
      }
      if (a.preco > b.preco) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  render() {



    return (
      <ConteudoApp>
        <Filtros
          valorMinimo={this.state.inputValorMin}
          valorMaximo={this.state.inputValorMax}
          nomeProduto={this.state.inputNomeProduto}
          onChangeRangeValor={this.onChangeRangeValor}
          OnChangeNomeProduto={this.OnChangeNomeProduto}
        />

        <SecaoConteudoGeral>
          <HeaderQtdOrdProdutos>
            <p>Quantidade de produtos: {this.state.produtos.length}</p>
            <label>
              Ordenação:
              <select
                value={this.state.caroBarato}
                onChange={this.onChangeCaroBarato}
              >
                <option onClick={this.ordenaCrescente}>Caro</option>
                <option onClick={this.ordenaDecrescente}>Barato</option>
              </select>
            </label>
          </HeaderQtdOrdProdutos>

          <GridComProdutos>
            {this.state.produtos.map((produto) => {
              return (
                <ProductCard
                  imagemProduto={produto.imagem}
                  nomeProduto={produto.nome}
                  precoProduto={produto.preco}
                />
              );
            })}
          </GridComProdutos>
        </SecaoConteudoGeral>
        <Cart />
      </ConteudoApp>
    );
  }
}

export default App;
