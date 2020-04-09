import { GET_DATA } from "../modules/Home/actions";

export const homeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
    return action.payload
    default:
      return state;
  }
};
