import styled from "styled-components";

export const CardContainer = styled.div`
  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d4d4d4;
  height: 100%;

  img {
    margin-top: 10px;
    max-height: 50%;
    max-width: 70%;
    border-radius: 10px;
    box-shadow: 1px 1px 20px grey, -1px 1px 40px grey;

    :hover {
      -webkit-transform: scale(1.1);
      /* transform: scale(1.1); */
      transition: 0.2s ease-in-out;
      box-shadow: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 10px 0;
    text-align: center;
    font-weight: bold;
    font-size: .8rem;
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
