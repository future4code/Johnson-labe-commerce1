import styled from "styled-components";

export const SecaoConteudoGeral = styled.div`
`;

export const ConteudoApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  
`;

export const HeaderQtdOrdProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 2vh 2vh;
`;

export const GridComProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;
