export const setFormSettings = (settingData) => {
  return {type: "SET_SETTINGS", payLoad: settingData};
};
export const setFormSetting = ({settingKey, settingData}) => {
  return {type: "SET_SETTING", payLoad: {settingKey, settingData}};
};
export const setFormInput = ({inputKey, inputVal}) => {
  return {type: "SET_INPUT", payLoad: {inputKey, inputVal}};
};
