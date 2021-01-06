import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";

describe("Index", () => {
  const initialState = { activities: [] };
  const mockStore = configureStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  describe("rendering", () => {
    store = mockStore(initialState);
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    it("should render a App component", () => {
      expect(wrapper.find(App)).toHaveLength(1);
    });
  });
});
