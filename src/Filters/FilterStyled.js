import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: #d4d4d4;

  width: 20vw;
  height: 100vh;
  padding: 10vh 1vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;


`;
export const InputFilter = styled.label`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  width: 40vw;
  padding: 1vh 0;

  input {
    outline: none;
    width: 45%;
    height: 3vh;
    padding-left: 10px;
    border: none;
    border-radius: 5px;

    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2),
      -2px -2px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const InputSearch = styled.input`
  width: 65vw;
  outline: none;
  padding: 1vw;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2),
    -2px -2px 2px 0 rgba(0, 0, 0, 0.1);
`;
