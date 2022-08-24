export const setFormSettings = (settingData) => {
  // debugger

  return {type: "SET_SETTINGS", payLoad: settingData};
};
export const setFormSetting = ({settingKey, settingData}) => {
  return {type: "SET_SETTING", payLoad: {settingKey, settingData}};
};
