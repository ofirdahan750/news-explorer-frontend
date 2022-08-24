const initialState = {
  isOpen: false,
  type: "init",
  title: "Loading...",
  inputs: {email: "", password: ""},
  btnSetting: {isDisable: true, Txt: "Loading..."},
  isValidInput: false
};
export function formSettingReducer(state = initialState, action) {
  const {payLoad, type} = action;
  switch (type) {
    case "SET_SETTINGS":
      return {...payLoad};
    case "SET_SETTING":
      return {...state, [state[payLoad.settingKey]]: payLoad.settingData};
    case "SET_INPUT":
      return {
        ...state,
        inputs: {...state.inputs, [payLoad.inputKey]: payLoad.inputVal}
      };
    default:
      return state;
  }
}
