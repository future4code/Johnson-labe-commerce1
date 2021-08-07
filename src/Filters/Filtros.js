import React from "react";
import { FilterContainer, InputFilter, InputSearch,SeparaIntens } from "./StyledFiltros";

export class Filtros extends React.Component {
  render() {
    return (
      <>
        <FilterContainer>
          <h3>Filtros</h3>

          <InputFilter>
            <input
              placeholder="Valor mínimo"
              type="number"
              value={this.props.valorMinimo}
              onChange={this.props.OnChangeValorMin}
            />
          </InputFilter>

          <InputFilter>
            <input
              placeholder="Valor máximo"
              value={this.props.valorMaximo}
              onChange={this.props.OnChangeValorMax}
            />
          </InputFilter>
          <SeparaIntens/>
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
