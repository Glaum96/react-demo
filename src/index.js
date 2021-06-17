import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourites-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById("root")
);
