import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalPopUp } from "../../modules/Home/actions";
import ModalView from "../ModalView";
import FullCalendar from "@fullcalendar/react";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./style.scss";

function ModalWrapper(props) {
  const modalVisibility = (value) => {
    props.modalPopUp(false);
  };

  const [getEnableButton, setEnableButton] = useState(false);

  const enableCalender = () => {
    setEnableButton(!getEnableButton);
  };
  console.log(props.modalData.activity_periods, "....props at modal wrapper");
  const { modalData } = props;
  return (
    <React.Fragment>
      {modalData.activity_periods !== undefined &&
      modalData.activity_periods.length > 0 ? (
        <ModalView
          size="lg"
          onHide={modalVisibility}
          visibility={props.modalPopUpState}
          modalVisibilityFunc={modalVisibility}
          ariaLabelledby="example-modal-sizes-title-sm"
          dataModal={props.modalData}
          buttonVisiblity={false}
          header={modalData.real_name}
        >
          <div>
            {modalData.activity_periods.map((obj) => (
              <div className="datadiv">
                <div className="starttime">
                  <span>
                    <h5>{"Start time :"}</h5>
                  </span>
                  <span>{obj.start_time}</span>
                </div>
                <div className="starttime">
                  <span>
                    <h5>{"End time :"}</h5>
                  </span>
                  <span>{obj.end_time} </span>
                </div>
              </div>
            ))}
          </div>

          {!getEnableButton ? (
            <div className="btn-sm-div">
              <button
                className="btn btn-info btn-sm"
                onClick={() => enableCalender()}
              >
                Details
              </button>
            </div>
          ) : null}
          {getEnableButton ? (
            <React.Fragment>
              <div style={{ padding: "3% 7%" }}>
                <FullCalendar
                  defaultView="dayGridMonth"
                  // plugins={[calendarPlugins]}
                  plugins={[dayGridPlugin]}
                  weekends={true}
                  size={"sm"}
                  events={props.selectedContentArray}
                />
              </div>
              <div className="btn-sm-div">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => enableCalender()}
                >
                  Disable
                </button>
              </div>
            </React.Fragment>
          ) : null}
        </ModalView>
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = ({ homeData: { modalPopUp } }) => {
  return { modalPopUpState: modalPopUp };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ modalPopUp }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);

ModalWrapper.defaultProps = {};
