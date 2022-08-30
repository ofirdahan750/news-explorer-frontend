const initialState = {isLoading: false};

export function loadingReducer(state = initialState, action) {
  const {payLoad, type} = action;
  switch (type) {
    case "SET_LOADING":
      return {isLoading: payLoad.isLoading};
    default:
      return state;
  }
}
