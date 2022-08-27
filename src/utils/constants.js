export const txtErr = "Something went wrong, please try again later ";
export const loadingInitState = {
  userInfo: {
    name: "Loading...",
    about: "Loading...",
    avatar: "spinnerGif",
    email: "test@gmail.com"
  }
};
export const formState = {
  init: {
    isOpen: false,
    type: "init",
    title: "Loading...",
    inputs: {},
    btnSetting: {isDisable: true, txt: "Loading..."},
    isFormVaild: false,
    bottomLink: {txt: "Loading...", linkType: "close"}
  },
  close: {
    isOpen: false,
    type: "close",
    title: "Closing...",
    btnSetting: {isDisable: true, txt: "Closing..."},
    inputs: {
      emailAddress: {inputVal: "", inputMsgVaild: ""},
      userPassword: {inputVal: "", inputMsgVaild: ""},
      userName: {inputVal: "", inputMsgVaild: ""}
    },
    bottomLink: {txt: "Close...", linkType: "close"},
    isFormVaild: false
  },
  register: {
    isOpen: true,
    type: "register",
    title: "Sign up",
    inputs: {
      emailAddress: {inputVal: "", inputMsgVaild: ""},
      userPassword: {inputVal: "", inputMsgVaild: ""},
      userName: {inputVal: "", inputMsgVaild: ""}
    },
    btnSetting: {isDisable: false, txt: "Sign up"},
    bottomLink: {txt: "Sign in", linkType: "login"},

    isFormVaild: false
  },
  login: {
    isOpen: true,
    type: "login",
    title: "Sign in",
    btnSetting: {isDisable: false, txt: "Sign in"},
    inputs: {
      emailAddress: {inputVal: "", inputMsgVaild: ""},
      userPassword: {inputVal: "", inputMsgVaild: ""}
    },
    isFormVaild: false,
    bottomLink: {txt: "Sign up", linkType: "register"}
  }
};

export const loadingInitError = {};
