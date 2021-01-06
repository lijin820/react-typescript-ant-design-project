import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ActivityList from "../../components/ActivityList";
import { ActivityType } from "../../types";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

describe("ActivityList", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    const activities: ActivityType[] = [
      {
        type: "test type",
        url: "test url",
        note: "test note",
      },
    ];
    beforeEach(() => {
      wrapper = shallow(<ActivityList activities={activities} />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have List", () => {
      expect(wrapper.find('[data-id="list"]').length).toEqual(1);
    });
  });
});
