import styled from "styled-components";

export const CardContainer = styled.div`
  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d4d4d4;
  height: 50vh;

  img {
    margin-top: 10px;
    max-height: 50%;
    max-width: 90%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 10px 0;
    text-align: center;
  }
`;

export const AddToCartButton = styled.button`
  align-self: center;
  border: none;
  border-radius: 15px;
  padding: 15px;
  margin-top: 2vh;
  width: 10vw;

  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
    -2px -2px 3px 0 rgba(0, 0, 0, 0.1);

  :hover {
    background-color: goldenrod;
    cursor: pointer;
  }
`;
