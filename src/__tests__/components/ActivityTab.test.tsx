import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ActivityTab from "../../components/ActivityTab";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

describe("ActivityTab", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<ActivityTab />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have activity modal", () => {
      expect(wrapper.find('[data-id="add-activity-modal"]').length).toEqual(1);
    });

    it("simulate button click event", () => {
      wrapper.find('[data-id="add-button"]').simulate("click");
      expect(
        wrapper.find('[data-id="add-activity-modal"]').prop("visible")
      ).toEqual(true);
    });
  });
});
