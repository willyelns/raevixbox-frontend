import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default class Main extends Component {
  // Contem todas as informações manipuladas pelo componente
  state = {
    newBox: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    // Controla o state para a nova renderização a cada atualização do valor
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit"> Criar </button>
        </form>
      </div>
    );
  }
}
