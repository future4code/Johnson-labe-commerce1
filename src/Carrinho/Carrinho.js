import { Container, ProductAll, ProductTotal } from "./CarrinhoStyled";
import CartIcon from "../Image/Cart.svg";

const ClickCart = () => {
  alert(`Houve um clique no botão, mas ainda está sem funcionamento`);
};

function Carrinho(props) {
  return (
    <Container>
      <h2>
        <img src={CartIcon} />
      </h2>
      {props.produtos.map(produto => (
        <ProductAll>
          <p>{produto.nome}</p>
          <button onClick={ClickCart}>X</button>
        </ProductAll>
      ))}

      <ProductTotal>
        <p>Valor Total</p>
        <p> 
          
        </p>
      </ProductTotal>
    </Container>
  );
      }

export default Carrinho;


