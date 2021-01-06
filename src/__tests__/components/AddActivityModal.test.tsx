import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AddActivityModal from "../../components/AddActivityModal";

describe("AddActivityModal", () => {
  const initialState = { activities: [] };
  const mockStore = configureStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;
  const visible = true;
  const setVisible = jest.fn;

  describe("rendering", () => {
    store = mockStore(initialState);
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <AddActivityModal visible={visible} setVisible={setVisible} />
        </Provider>
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("renders parent component", () => {
      expect(wrapper.find(AddActivityModal)).toHaveLength(1);
    });
  });
});
