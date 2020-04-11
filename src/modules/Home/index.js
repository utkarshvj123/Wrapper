import React, { Component } from "react";
import Cards from "../../components/Cards";
import { connect } from "react-redux";
import styled from "styled-components";
import "./style.css";
import { bindActionCreators } from "redux";
import { modalPopUp } from "./actions";
import ModalWrapper from "../../components/ModalWrapper";
import NavBar from "../../components/NavBar";
import { authenticateUserAction } from "../Login/actions";
import {
  filterArrayRequired,
} from "../../constants/globalFunction";



const Container = styled.div`
  display: grid;
  margin: 10%;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 10% 5%;
  }
  @media screen and (max-width: 767px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 10% 5%;
  }
  @media screen and (max-width: 1680px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 10% 5%;
  }
`;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCard: {},
      selectedContentArray: [],
    };
  }

  componentDidMount() {
    const {
      homeData: { data },
    } = this.props;
    this.setState({ data });
  }

  handleClick = (value) => {
    const newVal = filterArrayRequired(value.activity_periods);
    console.log(value, "....value", newVal);
    this.props.modalPopUp(true);
    this.setState({ selectedCard: value, selectedContentArray: newVal });
  };

  
  cardMapping = {
    name: "Details",
    type: "button",
    class: "btn btn-primary",
    click: this.handleClick,
  };

  logout = () => {
    console.log("logout clicked");
    this.props.authenticateUserAction(false);
  };

  render() {
    console.log(Object.keys(this.state.selectedCard).length, "'....syaye");
    const { data } = this.state;
    return (
      <React.Fragment>
        <NavBar
          logout={this.logout}
          heading={"FullThrottle"}
          buttonName={"Logout"}
          buttonClass="btn btn-primary"
        />
        <Container>
          <Cards
            styleCss={{
              margin: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,.1)",
              borderRadius: "10px",
              minWidth: "200px",
            }}
            cardBody={{
              fontSize: "medium",
              fontWeight: 600,
              margin: "3% 2% !important",
              justifyContent: "space-around",
            }}
            data={data}
            cardMapping={this.cardMapping}
          />
          <ModalWrapper
            modalData={this.state.selectedCard}
            selectedContentArray={this.state.selectedContentArray}
          />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ isValidUser, homeData }) => {
  return { isValidUser, homeData };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ modalPopUp, authenticateUserAction }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
