import { GET_DATA } from "../../Home/actions";
import data from "../../../constants/data.json";
import { filteringString } from "../../../constants/globalFunction";

export const IS_VALID_USER = "IS_VALID_USER";

export function authenticateUserAction(response) {
  return (dispatch) => {
    dispatch({
      type: IS_VALID_USER,
      payload: response,
    });
    if (response === true) {
      dispatch({
        type: GET_DATA,
        payload: data.members,
      });
    }
  };
}

const dataname = [
  { start_time: "Feb 1 2020  1:33PM", end_time: "Feb 1 2020 1:54PM" },
  { start_time: "Mar 1 2020  11:11AM", end_time: "Mar 1 2020 2:00PM" },
  { start_time: "Mar 16 2020  5:33PM", end_time: "Mar 16 2020 8:02PM" },
];