import { IS_VALID_USER } from "../modules/Login/actions";

const initialState = {
  cartTotal: 0,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_VALID_USER:
      return {
        ...state,
        cartTotal: action.payload,
      };
    default:
      return state;
  }
};
