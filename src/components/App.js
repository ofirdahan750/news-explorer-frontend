import React, {useCallback, useEffect, useState} from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import {
  loadingInitState,
  loadingInitError,
  txtErr,
  errImg
} from "../utils/constants";
const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <pre>{JSON.stringify(currentUser) || "loading.."}</pre>
      </div>
    </CurrentUserContext.Provider>
  );
};
export default App;
