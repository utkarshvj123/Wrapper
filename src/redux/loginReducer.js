import { FILTERED_ARRAY_VALUE } from "../modules/Login/actions";

const initialState = {
  cartTotal: 0,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_ARRAY_VALUE:
      return {
        ...state,
        cartTotal: action.payload,
      };
    default:
      return state;
  }
};
