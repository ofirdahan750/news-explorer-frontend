export const txtErr = "Something went wrong, please try again later ";

export const loadingInitState = {
  userInfo: {
    name: "Loading...",
    email: "Loading@gmail.com"
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
    bottomLink: {
      txt: {beforeSpan: "", afterSpan: ""},
      linkType: "init"
    }
  },
  close: {
    isOpen: false,
    type: "close",
    title: "Closing...",
    btnSetting: {isDisable: true, txt: "Closing..."},
    inputs: {},
    bottomLink: {
      txt: {beforeSpan: "Closing", afterSpan: "..."},
      linkType: "close"
    },
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
    bottomLink: {
      txt: {beforeSpan: "or", afterSpan: "Sign in"},
      linkType: "login"
    },
    serverError: "",
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
    bottomLink: {
      txt: {beforeSpan: "or", afterSpan: "Sign up"},
      linkType: "register"
    },
    serverError: ""
  },
  signup_success: {
    isOpen: true,
    type: "signup_success",
    title: "Registration successfully completed!",
    btnSetting: {isDisable: false, txt: ""},
    inputs: {},
    isFormVaild: false,
    bottomLink: {
      txt: {beforeSpan: "", afterSpan: "Sign in"},
      linkType: "login"
    },
    serverError: ""
  }
};

export const articlesStateInit = {
  listSetting: {
    isArticlesLoading: false,
    isArticlesSectionActive: false
  },
  searchArticlesList: [
    {
      source: "Loading...",
      title: "Loading...",
      date: "january 1 0000",
      text: "Loading...",
      image: "",
      url: ""
    }
  ],
  savedArticlesList: [
    {
      source: "Loading...",
      title: "Loading...",
      date: "january 1 0000",
      text: "Loading...",
      image: "",
      url: "",
      keyword: "",
      owner: ""
    }
  ]
};
