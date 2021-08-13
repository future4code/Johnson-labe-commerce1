import styled from "styled-components";

export const Container = styled.div`
  background-color: #d4d4d4;

  width: 20vw;
  height: 100vh;
  padding: 10vh 1vh;

  display: flex;
  flex-direction: column;

  img {
    width: 20px;
  }
`;

export const ProductAll = styled.div`
  padding-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: lightcoral;
    width: 30px;
    height: 30px;
    border: none;
    box-shadow: 1px 1px 4px black, -1px -1px 2px grey;

    :hover {
        background-color: red;
        cursor: pointer;
    }
  }
`;
export const ProductTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5vw 2vw;
`;
