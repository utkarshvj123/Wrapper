import React, { Component } from "react";
import Cards from "../../components/Cards";
import api from "../../constants/api";

export default class Home extends Component {
  componentDidMount() {
    api
      .get()
      .then((res) => {
        const persons = res.data;
        console.log(persons, "data");
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
}
