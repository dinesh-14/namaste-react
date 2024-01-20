import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

import { BrowserRouter } from "react-router-dom";

describe("Header component testing", () => {
  it("should display login ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });

  
});
