const initialState = {
  title: "Loading...",
  form: {
    firstInput: {title: "Loading...", placeholder: "Loading..."},
    secInput: {title: "Loading...", placeholder: "Loading..."}
  },
  btnSetting: {isDisable: true, Txt: "Loading..."}
}
export function formSettingReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SETTINGS":
      return {...state, form: action.settingData};
    case "SET__SETTING":
      return {
        ...state,
        [action.settingKey]: action.settingData
      };
    default:
      return state;
  }
}
