import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import AddActivityModal from "../../components/AddActivityModal";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

describe("AddActivityModal", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      const visible = true;
      const setVisible = jest.fn;
      wrapper = shallow(
        <AddActivityModal visible={visible} setVisible={setVisible} />
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have Modal container", () => {
      expect(wrapper.find('[data-id="modal-container"]').length).toEqual(1);
    });
  });
});
