const initialState = {
  type: "init",
  title: "Loading...",
  btnSetting: {isDisable: true, Txt: "Loading..."}
};
export function formSettingReducer(state = initialState, action) {
  const {payLoad, type} = action;
  switch (type) {
    case "SET_SETTINGS":
      return {...payLoad};
    case "SET_SETTING":
      return {...state, [state[payLoad.settingKey]]: payLoad.settingData};
    default:
      return state;
  }
}
