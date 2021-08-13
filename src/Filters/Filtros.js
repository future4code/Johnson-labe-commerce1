import React from "react";
import {
  FilterContainer,
  InputFilter,
  InputSearch,
  SeparaIntens,
} from "./StyledFiltros";

export class Filtros extends React.Component {
  render() {
    return (
      <>
        <FilterContainer>
          <h3>Filtros</h3>

          <InputFilter>
            <input
              type="range"
              min="50"
              max="150"
              step="any"
              value={this.props.valorMaximo}
              onChange={this.props.onChangeRangeValor}
            />
          </InputFilter>
          <SeparaIntens />
          <InputFilter>
            <InputSearch
              placeholder="Produto"
              type="Text"
              value={this.props.nomeProduto}
              onChange={this.props.OnChangeNomeProduto}
            />
          </InputFilter>
        </FilterContainer>
      </>
    );
  }
}

export default Filtros;
