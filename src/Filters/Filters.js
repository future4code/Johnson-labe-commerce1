import React from "react";
import { FilterContainer, InputFilter,InputSearch } from "./FilterStyled";

export class Filters extends React.Component {
  render() {
    return (
      <>
        <FilterContainer>
          <h3>Filtros</h3>
          <InputFilter>
            <input placeholder="Valor mínimo" type="number"></input>
          </InputFilter>
          <InputFilter>
            <input placeholder="Valor máximo" type="number"></input>
          </InputFilter>
          
          <h3>Busca</h3>
          <InputFilter>
            <InputSearch type="Text" placeholder="Produto" />
          </InputFilter>
        </FilterContainer>
      </>
    );
  }
}

export default Filters;
