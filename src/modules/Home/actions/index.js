export const GET_DATA = "GET_DATA";
export const MODAL_POP_UP="MODAL_POP_UP";


export function getData(value) {
  return dispatch => {
    dispatch({
      type: GET_DATA,
      payload: value.data.members
    });
  };
}

//-----Modal popup-------//
export function modalPopUp(value) {
  return dispatch => {
    dispatch({
      type: MODAL_POP_UP,
      payload: value
    });
  };
}