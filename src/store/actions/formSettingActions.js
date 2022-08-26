export const setFormSettings = (settingData) => {
  return {type: "SET_SETTINGS", payLoad: settingData};
};
export const setFormSetting = ({settingKey, settingData}) => {
  return {type: "SET_SETTING", payLoad: {settingKey, settingData}};
};
export const setFormInput = ({inputKey, inputVal, inputMsgVaild}) => {
  return {type: "SET_INPUT", payLoad: {inputKey, inputVal, inputMsgVaild}};
};
// export const onSetVaildMsg = (e) => {
//   const {
//     target: {name, validationMessage}
//   } = e;
//   return {type: "SET_VAILD_MSG", payLoad: {name, validationMessage}};
// };
