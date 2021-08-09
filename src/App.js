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
  Select,
  Titulo,
} from "./AppStyled";
import Logo from "./Image/logo.png";

const ProductsContainer = styled.div``;

const arrayProdutos = [
  {
    id: 1,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/688929/boneco_senhor_cabeca_de_batata_buzz_lightyear_toy_story_brinquedo_hasbro_33408129_2_20200607181238.jpg",
    nome: "Batata Lightyear",
    preco: 100,
  },
  {
    id: 2,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMOkofYDTbuHDfmXjGtVkP39KHN7guwjOUEjRFOBJeDuRTOAo8rXcPotkNdWeP9ldC7qSuIY&usqp=CAc",
    nome: "Boneco Buzz Lightyer baby",
    preco: 70,
  },
  {
    id: 3,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_798428-MLB31123679011_062019-O.jpg",
    nome: "Boneco Zorg",
    preco: 90,
  },
  {
    id: 4,
    imagem: "https://cf.shopee.com.br/file/667c76c4d7bbe72d1745fd1935d79f08",
    nome: "Zorg vs Buzz - salve o ET",
    preco: 130,
  },
  {
    id: 5,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_731462-MLB42825854896_072020-O.jpg",
    nome: "Alien",
    preco: 50,
  },
  {
    id: 6,
    imagem: "https://m.media-amazon.com/images/I/81Zi+nq0jYL._AC_SL1500_.jpg",
    nome: "Buzz Lightyear com Navinha",
    preco: 150,
  },
];

export class App extends React.Component {
  state = {
    produtos: [...arrayProdutos],
    inputValorMin: "",
    inputValorMax: "",
    inputNomeProduto: "",
    caroBarato: "",
  };

  onChangeRangeValor = (event) => {
    const valorProduto = event.target.value;
    const filtroValores = arrayProdutos.filter(
      (valor) =>
        valor.preco <= valorProduto && valor.preco >= this.state.inputValorMin
    );
    this.setState({
      inputValorMax: valorProduto,
      produtos: valorProduto > 0 ? filtroValores : arrayProdutos,
    });
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

  onChangeCaroBarato = (event) => {
    const caroBarato = event.target.value;
    this.setState({ caroBarato });

    if (caroBarato === "Maior para menor") {
      this.ordenaCrescente();
    } else if (caroBarato === "Menor para maior") {
      this.ordenaDecrescente();
    } else {
      this.ordenaNenhum();
    }
  };

  ordenaNenhum() {
    return this.setState({ produtos: arrayProdutos });
  }

  ordenaCrescente() {
    return this.state.produtos.sort((a, b) => a.preco - b.preco);
  }

  ordenaDecrescente() {
    this.state.produtos.sort((a, b) => {
      if (a.preco < b.preco) {
        return 1;
      }
      if (a.preco > b.preco) {
        return -1;
      }
      return 0;
    });
  }

  render() {
    console.log("arrayProdutos", arrayProdutos[0].nome);

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
          <Titulo></Titulo>
          <HeaderQtdOrdProdutos>
            <img src={Logo}></img>
            <label>
              <p>Quantidade de produtos: {this.state.produtos.length}</p>
              Ordenar preços:
              <Select
                value={this.state.caroBarato}
                onChange={this.onChangeCaroBarato}
              >
                <option>Nenhum</option>
                <option>Maior para menor</option>
                <option>Menor para maior</option>
              </Select>
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
