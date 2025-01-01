import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import { IntlProvider } from "react-intl";

import store from './redux/store';
import * as actions from "./redux/login/loginTypes";
import AppLocale from './languages';
import Router from "./router/Router";

export default function App() {
  const customise = useSelector(state => state.customise);

  const currentAppLocale = AppLocale[customise.language];

  useEffect(() => {
    clearCacheData();
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute("lang", customise.language);
  }, [customise]);

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  const token = localStorage.getItem("token");
  if (token != undefined && token != "" && token != null) {
    store.dispatch({ type: actions.AUTHENTICATED, payload: { isAuthenticated: true } });
  };

  return (
    <ConfigProvider locale={currentAppLocale.antd} direction={customise.direction}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <Router />
      </IntlProvider>
    </ConfigProvider>
  );
};