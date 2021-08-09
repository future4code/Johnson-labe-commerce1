import styled from "styled-components";

export const SecaoConteudoGeral = styled.div`
display:flex;
flex-direction:column;
`;

export const ConteudoApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const HeaderQtdOrdProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vh 2vh;
  color: #DAA520;

  img{
    width: 10vw;
    align-self: flex-start;
  }

`;

export const GridComProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const Select = styled.select`
  width: 10vw;
`;

export const Titulo = styled.h1`

`;
