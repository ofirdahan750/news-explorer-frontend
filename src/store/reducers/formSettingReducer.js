const initialState = {
  formSetting: {
    title: "Loading...",
    formInput: {
      firstInput: {title: "Loading...", placeholder: "Loading..."},
      secInput: {title: "Loading...", placeholder: "Loading..."}
    },
    btnSetting: {isDisable: true, Txt: "Loading..."}
  }
};
export function formSettingReducer(state = initialState, action) {
  const {payLoad, type} = action;
  switch (type) {
    case "SET_SETTINGS":
      return {...state, formSetting: payLoad};
    case "SET__SETTING":
      return {
        ...state,
        formSetting: {
          [payLoad.settingKey]: payLoad.settingData
        }
      };
    default:
      return state;
  }
}
