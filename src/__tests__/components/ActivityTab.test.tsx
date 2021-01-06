import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ActivityTab from "../../components/ActivityTab";

describe("ActivityTab", () => {
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
          <ActivityTab />
        </Provider>
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("renders parent component", () => {
      expect(wrapper.find(ActivityTab)).toHaveLength(1);
    });
  });
});
