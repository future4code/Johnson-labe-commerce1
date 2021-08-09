import { Container, ProductAll, ProductTotal } from "./CartStyled";
import CartIcon from "../Image/Cart.svg";

const ClickCart = () => {
  alert(`Houve um clique no botão, mas `);
};

function Cart() {
  return (
    <Container>
      <h2>
        Cart
        <img src={CartIcon} />
      </h2>
      <ProductAll>
        <p>1x</p>
        <p>Produto X</p>
        <button onClick={ClickCart}>Remover</button>
      </ProductAll>
      <ProductAll>
        <p>2x</p>
        <p>Produto Y</p>
        <button onClick={ClickCart}>Remover</button>
      </ProductAll>

      <ProductTotal>
        <p>Valor Total</p>
        <p>R$ 5.000 </p>
      </ProductTotal>
    </Container>
  );
}

export default Cart;
