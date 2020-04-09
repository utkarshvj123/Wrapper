import { GET_DATA } from "../../Home/actions";
// import response from "../../../constants/response.json";

export const IS_VALID_USER = "IS_VALID_USER";

export function authenticateUserAction(data) {
  return (dispatch) => {
    dispatch({
      type: IS_VALID_USER,
      payload: data,
    });
    // if (data === true) {
    //   dispatch({
    //     type: GET_DATA,
    //     payload: response,
    //   });
    // }
  };
}
