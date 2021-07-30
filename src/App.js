import React, { Suspense } from "react";
import i18n from "./translations/i18n";
import { I18nextProvider } from 'react-i18next';
import { AppRouter } from "./routers/AppRouter";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <I18nextProvider i18n={i18n}>
          <AppRouter />
        </I18nextProvider>
      </Suspense>
    </div>
  );
};
