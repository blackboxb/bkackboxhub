import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Lazy loading App for better performance
const App = lazy(() => import("./App"));

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
