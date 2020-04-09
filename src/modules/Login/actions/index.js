export const FILTERED_ARRAY_VALUE = "FILTERED_ARRAY_VALUE";

export function filteredArray(value) {
  return (dispatch) => {
    dispatch({
      type: FILTERED_ARRAY_VALUE,
      payload: value,
    });
  };
}