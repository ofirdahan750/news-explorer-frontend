const initialState = {
  isOpen: false,
  type: "init",
  title: "Loading...",
  inputs: {
    emailAddress: {inputVal: "", inputMsgVaild: ""},
    userPassword: {inputVal: "", inputMsgVaild: ""},
    userName: {inputVal: "", inputMsgVaild: ""}
  },
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
        inputs: {
          ...state.inputs,
          [payLoad.inputKey]: {
            inputVal: payLoad.inputVal,
            inputMsgVaild: payLoad.inputMsgVaild
          }
        }
      };
    default:
      return state;
  }
}
