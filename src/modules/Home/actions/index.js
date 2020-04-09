export const GET_DATA = "GET_DATA";

export function getData(value) {
  return dispatch => {
    dispatch({
      type: GET_DATA,
      payload: value
    });
  };
}