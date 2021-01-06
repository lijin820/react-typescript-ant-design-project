import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ActivityList from "../../components/ActivityList";
import { ActivityType } from "../../types";

describe("ActivityList", () => {
  const initialState = { activities: [] };
  const mockStore = configureStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;
  const activities: ActivityType[] = [];

  describe("rendering", () => {
    store = mockStore(initialState);
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <ActivityList activities={activities} />
        </Provider>
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("renders parent component", () => {
      expect(wrapper.find(ActivityList)).toHaveLength(1);
    });
  });
});
