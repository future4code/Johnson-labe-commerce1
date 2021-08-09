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





// export default function Cart(props) {
//   const { itensCarrinho, onAdd, onRemover } = props;
//     const precoItens = itensCarrinho.reduce((a, b) => a + b.preco * b.qtd, 0);
//     const frete =  10
//     const precoTotal = precoItens + frete

//   return (
//     <Container>
//       <h2>
//         Carrinho
//         <img src={CartIcon} />
//       </h2>
//       <ProductAll>
//       <aside>
//         <h2>itens</h2>
//         <div>{itensCarrinho.length === 0 && <div>Carrinho está vazio!</div>}</div>
//         {itensCarrinho.map((item)=>(
//         <div key={item.id} >
//             <div>{item.nome}</div>
//             <div>
//                 <button onClick={()=>onAdd(item)} className="add">+</button>
//                 <button onClick={()=>onRemover(item)} className="remover">-</button>
//             </div>
//             <div>
//                 {item.qtd} x R$ {item.preco.toFixed(2)}
//             </div>

//         </div>
//         ))}
        
//     </aside>
//     );
//       </ProductAll>
//             <ProductTotal>
//             {itensCarrinho.length !==0 && (
//             <>
//             <hr></hr>
//             <div className="row">
//             <div className="col-2">Preço produtos</div>
//             <div className="col-1 texto-direita">R${precoItens.toFixed(2)}</div> 
//             </div>
//             <div className="row">
//             <div className="col-2">Frete</div>
//             <div className="col-1 texto-direita">R${frete.toFixed(2)}</div>
//             </div>
//             <div className="row">
//             <div className="col-2"><strong>Valor total</strong></div>
//             <div className="col-1 texto-direita">R${precoTotal.toFixed(2)}</div>
//             </div>
//             <hr/>
//             <div className="row">
//                 <button onClick={()=> alert('Adicionar forma de pagamento')}>
//                     Fechar pedido
//                 </button>
//             </div>
//             </>
//         )}
//       </ProductTotal>
//     </Container>
//   );
// }


