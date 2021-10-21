import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import { AUTHORIZATION } from "../Actions/ActionTypes";
const history = createBrowserHistory({ forceRefresh: true });

export function Form() {
    require('./Form.css')
  const login = useSelector((state) => state.UserReducer.login);
  const password = useSelector((state) => state.UserReducer.password);
  const [loginStr, setLoginStr] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const [error, setError] = useState(false);
  const submit = (e) => {
    if (loginStr !== login || passwordStr !== password) {
      setError(true);
      return false;
    } else if (loginStr === login && passwordStr === password) {
      history.push("/profile");
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  return (
    <div className="form">
      <div className="form-input form-login">
        <input
          type="text"
          value={loginStr}
          onChange={(e) => setLoginStr(e.target.value)}
        />
      </div>
      <div className="form-input form-password">
        <input
          type="text"
          value={passwordStr}
          onChange={(e) => setPasswordStr(e.target.value)}
        />
      </div>
      <div className="form-submit" >
        <button onClick={submit}>Войти</button>
      </div>
      {error === true && <span>проверьте логин и пароль</span>}
    </div>
  );
}
